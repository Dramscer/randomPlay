# urls.py (el principal)

from django.contrib import admin
from django.urls import path
# Importa estas dos librerías
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
]

# Agrega esto al final para servir las imágenes en modo desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
