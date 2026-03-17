from rest_framework import serializers
from .models import Videojuego, Categoria, Stock

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class VideojuegoSerializer(serializers.ModelSerializer):
    # Esto hará que en lugar de un ID, veamos el nombre de la categoría
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')
    # Esto traerá la cantidad de stock vinculada al juego
    stock_actual = serializers.ReadOnlyField(source='stock.cantidad')

    class Meta:
        model = Videojuego
        fields = ['id', 'titulo', 'descripcion', 'precio', 'portada', 'categoria', 'categoria_nombre', 'stock_actual']