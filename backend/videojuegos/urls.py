from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VideojuegoViewSet

# Creamos el router para que maneje las rutas de la API automáticamente
router = DefaultRouter()
router.register(r'lista', VideojuegoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]