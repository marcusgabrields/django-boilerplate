from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),

    path(
        '',
        TemplateView.as_view(template_name='myapp/itworks.html'),
        name='home'
    ),
]

if settings.DEBUG:
    # Django Debug Toolbar
    import debug_toolbar
    urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]

    # Django Silk
    urlpatterns += [path(r'silk/', include('silk.urls', namespace='silk'))]
