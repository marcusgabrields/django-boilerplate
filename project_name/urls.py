from django.conf import settings
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    # Django Debug Toolbar
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]

    # Django Silk
    urlpatterns += [path(r'silk/', include('silk.urls', namespace='silk'))]
