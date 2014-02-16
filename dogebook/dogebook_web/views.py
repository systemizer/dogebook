from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
import facebook

@login_required
def index(request):
    graph = facebook.GraphAPI(request.user.social_auth.all()[0].tokens)
    fb_photos = graph.get_connections("me","photos")['data']
    picture_urls = filter(lambda x: x,map(lambda pic: pic.get("picture",None),fb_photos))
    return render_to_response("index.html",
                              {'picture_urls':picture_urls},
                              RequestContext(request))
