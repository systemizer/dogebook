from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.core.urlresolvers import reverse
import facebook

from dogebook_web.tasks import dogify_task
from dogebook_web.processing_manager import ProcessingManager
from dogebook_web.models import DogeImage

manager = ProcessingManager()

@login_required
def index(request):
    if manager.has(request.user.id):
        return render_to_response("loading.html",{},RequestContext(request))

    if not DogeImage.objects.filter(owner=request.user).exists():
        graph = facebook.GraphAPI(request.user.social_auth.all()[0].tokens)
        fb_photos = graph.get_connections("me","photos")['data']
        dogify_task.delay(fb_photos,request.user)
        return render_to_response("loading.html",{},RequestContext(request))

    else:
        dogify_images = DogeImage.objects.filter(owner=request.user)
        return render_to_response("index.html",
                                  {'dogify_images':dogify_images},
                                  RequestContext(request))


def splash(request):
    return render_to_response("splash.html", {}, RequestContext(request))
