import os
import random

import urllib, cStringIO
import Image
from django.conf import settings
from django.core.files.base import ContentFile

from dogebook_web.models import DogeImage

def dogify(fb_photos,user):
    '''
    This takes in an array of picture urls, dogifies them, stores
    them somewhere, and returns urls from which they can be accessed
    '''
    doge_img = Image.open(settings.PATH_TO_DOGE,'r')

    known_images_map = dict([(di.fb_id,di) for di in DogeImage.objects.filter(owner=user)])

    returned_images = []

    for photo in fb_photos:
        if photo['id'] in known_images_map:
            returned_images.append(known_images_map[photo['id']])
            continue

        url = photo['picture'].replace("s.jpg","b.jpg")

        file = cStringIO.StringIO(urllib.urlopen(url).read())
        background = Image.open(file)
        doge_img_w,doge_img_h=doge_img.size
        bg_w,bg_h=background.size
        offset=(int((bg_w-doge_img_w)/4 + (bg_w-doge_img_w)/2*random.random()),int((bg_h-doge_img_h)/4 + (bg_h-doge_img_h)/2*random.random()))
        background.paste(doge_img,offset,doge_img)

        imagefile = cStringIO.StringIO()
        background.save(imagefile,format="PNG")

        comment = None
        if photo.get("comments"):
            comment = photo.get("comments")['data'][0]['message']

        doge_image = DogeImage(fb_id=photo['id'],owner=user,comment=comment)
        doge_image.save()
        doge_image.image.save(
            os.path.basename(url),
            ContentFile(imagefile.getvalue()),
            save=True
        )
        known_images_map[doge_image.fb_id] = doge_image
        returned_images.append(doge_image)

    return returned_images
