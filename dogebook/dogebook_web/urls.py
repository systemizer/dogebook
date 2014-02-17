from django.conf.urls import patterns, include, url

urlpatterns = patterns(
    'dogebook_web.views',
    url(r'^$', 'index',name="dogebook_web_index"),
    url(r'^splash/$', 'splash',name="dogebook_web_splash"),
)
