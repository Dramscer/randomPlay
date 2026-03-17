from rest_framework import serializers
from .models import Videojuego, Categoria, Stock

class VideojuegoSerializer(serializers.ModelSerializer):
    # 1. Primero definimos los campos extra que no están en el modelo original
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')
    stock_actual = serializers.ReadOnlyField(source='stock.cantidad')
    precio_formateado = serializers.SerializerMethodField()
    etiqueta_stock = serializers.SerializerMethodField()

    class Meta:
        model = Videojuego
        # 2. Los agregamos a la lista de campos que se enviarán por la API
        fields = [
            'id', 'titulo', 'descripcion', 'precio', 
            'precio_formateado', 'portada', 'categoria_nombre', 
            'stock_actual', 'etiqueta_stock'
        ]

    # 3. Al fondo colocamos las funciones que calculan esos campos
    def get_precio_formateado(self, obj):
        return f"${obj.precio:,.2f} MXN"

    def get_etiqueta_stock(self, obj):
        try:
            cantidad = obj.stock.cantidad
            if cantidad == 0:
                return "Agotado"
            elif cantidad <= 5:
                return "¡Últimas piezas!"
            return "Disponible"
        except:
            return "Sin datos de inventario"