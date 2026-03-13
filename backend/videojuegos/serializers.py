from rest_framework import serializers
from .models import Videojuego

class VideojuegoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Videojuego
        fields = '__all__' # Esto enviará ID, título, precio, imagen, etc.