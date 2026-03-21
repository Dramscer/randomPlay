from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Videojuego, Categoria, Stock, Favorito

# --- SERIALIZADOR DE CATEGORÍAS ---
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre']

# --- SERIALIZADOR DE VIDEOJUEGOS ---
class VideojuegoSerializer(serializers.ModelSerializer):
    categoria_nombre = serializers.ReadOnlyField(source='categoria.nombre')
    stock_actual = serializers.ReadOnlyField(source='stock.cantidad', default=0)
    precio_con_descuento = serializers.ReadOnlyField(source='precio_final')
    porcentaje_descuento = serializers.ReadOnlyField(source='descuento')
    precio_formateado = serializers.SerializerMethodField()
    precio_descuento_formateado = serializers.SerializerMethodField()
    etiqueta_stock = serializers.SerializerMethodField()
    portada = serializers.SerializerMethodField() 

    class Meta:
        model = Videojuego
        fields = [
            'id', 'titulo', 'descripcion', 'precio', 
            'precio_con_descuento', 'porcentaje_descuento',
            'es_destacado', 'precio_formateado', 
            'precio_descuento_formateado', 'portada', 
            'categoria_nombre', 'stock_actual', 'etiqueta_stock'
        ]

    def get_portada(self, obj):
        if obj.portada:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.portada.url)
            return obj.portada.url 
        return None

    def get_precio_formateado(self, obj):
        return f"${obj.precio:,.2f} MXN"

    def get_precio_descuento_formateado(self, obj):
        return f"${obj.precio_final:,.2f} MXN"

    def get_etiqueta_stock(self, obj):
        try:
            cantidad = obj.stock.cantidad
            if cantidad == 0: return "Agotado"
            elif cantidad <= 5: return "¡Últimas piezas!"
            return "Disponible"
        except:
            return "Sin datos de inventario"

# --- NUEVOS SERIALIZADORES DE USUARIO ---

class UserSerializer(serializers.ModelSerializer):
    """Para el registro de nuevos usuarios"""
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        # El método create_user encripta la contraseña automáticamente
        user = User.objects.create_user(**validated_data)
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    """Para que el usuario edite su perfil"""
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

# --- SERIALIZADOR DE FAVORITOS ---
class FavoritoSerializer(serializers.ModelSerializer):
    videojuego_data = VideojuegoSerializer(source='videojuego', read_only=True)

    class Meta:
        model = Favorito
        fields = ['id', 'videojuego', 'videojuego_data', 'fecha_agregado']