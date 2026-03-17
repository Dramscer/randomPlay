from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Videojuego, Stock
from .serializers import VideojuegoSerializer

class VideojuegoViewSet(viewsets.ModelViewSet):
    queryset = Videojuego.objects.filter(stock__cantidad__gt=0)
    serializer_class = VideojuegoSerializer

    # Esta es la función mágica que descuenta el stock
    @action(detail=True, methods=['post'])
    def comprar(self, request, pk=None):
        videojuego = self.get_object()
        try:
            # Buscamos el stock de este juego específico
            stock = videojuego.stock 
            if stock.cantidad > 0:
                stock.cantidad -= 1 # Restamos una unidad
                stock.save()
                return Response({'status': 'Compra exitosa', 'stock_restante': stock.cantidad}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No hay stock disponible'}, status=status.HTTP_400_BAD_REQUEST)
        except Stock.DoesNotExist:
            return Response({'error': 'Este juego no tiene registro de stock'}, status=status.HTTP_404_NOT_FOUND)