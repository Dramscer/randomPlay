from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre de la Categoría")
    
    def __str__(self):
        return self.nombre

class Videojuego(models.Model):
    titulo = models.CharField(max_length=200, verbose_name="Título")
    descripcion = models.TextField(blank=True, null=True, verbose_name="Descripción")
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio")
    # Requiere instalar la librería 'Pillow' (pip install Pillow)
    portada = models.ImageField(upload_to='portadas/', verbose_name="Imagen de Portada")
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='videojuegos')

    def __str__(self):
        return self.titulo

class Stock(models.Model):
    # Usamos OneToOne porque lo ideal es que un juego tenga un solo registro de inventario general
    videojuego = models.OneToOneField(Videojuego, on_delete=models.CASCADE, related_name='stock')
    cantidad = models.PositiveIntegerField(default=0, verbose_name="Cantidad en Stock")

    def __str__(self):
        return f"Stock de {self.videojuego.titulo}: {self.cantidad}"
