from rest_framework import viewsets, status, generics, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Videojuego, Stock, Categoria, Favorito
from .serializers import (
    VideojuegoSerializer, CategoriaSerializer, 
    UserSerializer, UserUpdateSerializer, FavoritoSerializer
)

# --- VISTAS DE CATÁLOGO ---

class CategoriaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class VideojuegoViewSet(viewsets.ModelViewSet):
    queryset = Videojuego.objects.all() 
    serializer_class = VideojuegoSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

    @action(detail=True, methods=['post'])
    def comprar(self, request, pk=None):
        videojuego = self.get_object()
        try:
            stock = videojuego.stock 
            if stock.cantidad > 0:
                stock.cantidad -= 1
                stock.save()
                return Response({
                    'status': 'comprado',
                    'titulo': videojuego.titulo,
                    'stock_restante': stock.cantidad
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    'error': f'Lo sentimos, ya no hay códigos disponibles para {videojuego.titulo}.'
                }, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({'error': 'Error al procesar la compra.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# --- NUEVAS VISTAS DE USUARIO Y SEGURIDAD ---

class RegistroView(generics.CreateAPIView):
    """Endpoint para crear nuevos usuarios (Público)"""
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

class PerfilViewSet(viewsets.ModelViewSet):
    """Endpoint para ver y editar el perfil (Requiere Login)"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserUpdateSerializer

    def get_queryset(self):
        # Solo retornamos el usuario que está haciendo la petición
        return User.objects.filter(id=self.request.user.id)

    def list(self, request):
        # Atajo para obtener los datos del usuario logueado rápidamente
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

class FavoritoViewSet(viewsets.ModelViewSet):
    """Endpoint para gestionar juegos favoritos (Requiere Login)"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = FavoritoSerializer

    def get_queryset(self):
        # El usuario solo ve sus propios favoritos
        return Favorito.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        # Guardamos el favorito asociándolo automáticamente al usuario actual
        serializer.save(usuario=self.request.user)

    @action(detail=False, methods=['post'], url_path='toggle')
    def toggle_favorito(self, request):
        """Añade o quita un favorito con un solo clic"""
        videojuego_id = request.data.get('videojuego')
        if not videojuego_id:
            return Response({'error': 'ID de videojuego requerido'}, status=status.HTTP_400_BAD_REQUEST)

        favorito, created = Favorito.objects.get_or_create(
            usuario=request.user, 
            videojuego_id=videojuego_id
        )

        if not created:
            favorito.delete()
            return Response({'status': 'removed'}, status=status.HTTP_200_OK)
        
        return Response({'status': 'added'}, status=status.HTTP_201_CREATED)