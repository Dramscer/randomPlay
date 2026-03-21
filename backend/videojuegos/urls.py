from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import (
    VideojuegoViewSet, 
    CategoriaViewSet, 
    RegistroView, 
    PerfilViewSet, 
    FavoritoViewSet
)

# El router manejará las rutas de los ViewSets automáticamente
router = DefaultRouter()
router.register(r'lista', VideojuegoViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'perfil', PerfilViewSet, basename='perfil')
router.register(r'favoritos', FavoritoViewSet, basename='favoritos')

urlpatterns = [
    # Rutas automáticas del router (Lista, Categorías, Perfil, Favoritos)
    path('', include(router.urls)),

    # --- RUTAS DE AUTENTICACIÓN ---
    
    # 1. Registro de nuevos usuarios
    path('auth/registro/', RegistroView.as_view(), name='auth_registro'),
    
    # 2. Login (Obtener Token de acceso y refresh)
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # 3. Refrescar el Token (Para mantener la sesión activa)
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]