from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User # Importamos el modelo de usuario de Django

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre de la Categoría")
    
    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"

class Videojuego(models.Model):
    titulo = models.CharField(max_length=200, verbose_name="Título")
    descripcion = models.TextField(blank=True, null=True, verbose_name="Descripción")
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio Original")
    
    descuento = models.PositiveIntegerField(
        default=0, 
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        verbose_name="Porcentaje de Descuento (%)"
    )

    es_destacado = models.BooleanField(
        default=False, 
        verbose_name="¿Destacar en el Banner de Ofertas?"
    )
    
    portada = models.ImageField(upload_to='portadas/', verbose_name="Imagen de Portada")
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='videojuegos')

    def __str__(self):
        return self.titulo

    # --- PROPIEDADES PARA EL FRONTEND ---
    
    @property
    def precio_final(self):
        if self.descuento > 0:
            descuento_decimal = self.descuento / 100
            return float(self.precio) * (1 - descuento_decimal)
        return float(self.precio)

    @property
    def categoria_nombre(self):
        return self.categoria.nombre

    @property
    def stock_actual(self):
        return self.stock.cantidad if hasattr(self, 'stock') else 0

    @property
    def etiqueta_stock(self):
        if self.stock_actual > 10: return "En Stock"
        if self.stock_actual > 0: return "¡Pocas unidades!"
        return "Agotado"

class Stock(models.Model):
    videojuego = models.OneToOneField(Videojuego, on_delete=models.CASCADE, related_name='stock')
    cantidad = models.PositiveIntegerField(default=0, verbose_name="Cantidad en Stock")

    def __str__(self):
        return f"{self.videojuego.titulo}: {self.cantidad} unidades"

# --- NUEVO MODELO PARA FAVORITOS ---
class Favorito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favoritos')
    videojuego = models.ForeignKey(Videojuego, on_delete=models.CASCADE)
    fecha_agregado = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Favorito"
        verbose_name_plural = "Favoritos"
        unique_together = ('usuario', 'videojuego') # Evita duplicados por usuario

    def __str__(self):
        return f"{self.usuario.username} - {self.videojuego.titulo}"