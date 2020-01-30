from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('snippets_app.urls')),
    path('admin/', admin.site.urls),
]
