from django.contrib import admin

from django.contrib import admin
from .models import Categoria, Videojuego, Stock

# 1. Registramos Categoría de forma sencilla
admin.site.register(Categoria)

# 2. Personalizamos la vista de Videojuego
@admin.register(Videojuego)
class VideojuegoAdmin(admin.ModelAdmin):
    # Columnas que se verán en la lista principal
    list_display = ('titulo', 'categoria', 'precio') 
    # Agrega una barra de búsqueda por título
    search_fields = ('titulo',) 
    # Agrega un panel lateral para filtrar por categoría
    list_filter = ('categoria',) 

# 3. Personalizamos la vista de Stock
@admin.register(Stock)
class StockAdmin(admin.ModelAdmin):
    list_display = ('videojuego', 'cantidad')
    # ¡Truco clave! Permite editar el stock directamente desde la tabla sin abrir el registro
    list_editable = ('cantidad',) 
    search_fields = ('videojuego__titulo',)
