from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
  url('', include('social.apps.django_app.urls', namespace='social'))
)
