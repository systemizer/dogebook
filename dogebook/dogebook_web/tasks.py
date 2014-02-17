from __future__ import absolute_import

from celery import shared_task
from dogebook_web.utils import dogify


@shared_task
def dogify_task(fb_photos,user):
    return dogify(fb_photos,user)
