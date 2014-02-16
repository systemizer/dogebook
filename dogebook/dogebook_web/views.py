from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
import facebook

from dogebook_web.utils import dogify

@login_required
def index(request):
    graph = facebook.GraphAPI(request.user.social_auth.all()[0].tokens)
    fb_photos = graph.get_connections("me","photos")['data']

    dogify_images = dogify(fb_photos,request.user)

    return render_to_response("index.html",
                              {'dogify_images':dogify_images},
                              RequestContext(request))
