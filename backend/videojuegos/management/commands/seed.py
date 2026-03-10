from django.core.management.base import BaseCommand
# Aquí ya puse el nombre correcto de tu app: 'videojuegos'
from videojuegos.models import Categoria, Videojuego, Stock 

class Command(BaseCommand):
    help = 'Carga datos de prueba (seed data) en la base de datos'

    def handle(self, *args, **kwargs):
        self.stdout.write('Iniciando carga de datos...')

        # 1. Creamos Categorías
        cat_accion, _ = Categoria.objects.get_or_create(nombre='Acción')
        cat_rpg, _ = Categoria.objects.get_or_create(nombre='RPG')

        # 2. Creamos Videojuegos
        juego1, creado1 = Videojuego.objects.get_or_create(
            titulo='The Legend of Zelda: Breath of the Wild',
            defaults={
                'descripcion': 'Un mundo abierto lleno de aventuras.',
                'precio': 59.99,
                'portada': 'portadas/zelda_dummy.jpg', 
                'categoria': cat_rpg
            }
        )

        juego2, creado2 = Videojuego.objects.get_or_create(
            titulo='Halo Infinite',
            defaults={
                'descripcion': 'El regreso del Jefe Maestro.',
                'precio': 49.99,
                'portada': 'portadas/halo_dummy.jpg', 
                'categoria': cat_accion
            }
        )

        # 3. Asignamos Stock
        if creado1:
            Stock.objects.create(videojuego=juego1, cantidad=15)
        if creado2:
            Stock.objects.create(videojuego=juego2, cantidad=30)

        self.stdout.write(self.style.SUCCESS('¡Misión cumplida! Datos de prueba cargados con éxito.'))