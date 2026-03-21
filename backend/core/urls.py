from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/videojuegos/', include('videojuegos.urls')), 
]

# Esto permite que Django "sirva" las imágenes de la carpeta media 
# mientras estás en modo desarrollo (DEBUG = True)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)