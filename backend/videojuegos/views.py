from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Videojuego
from .serializers import VideojuegoSerializer

class VideojuegoViewSet(viewsets.ModelViewSet):
    queryset = Videojuego.objects.all()
    serializer_class = VideojuegoSerializer