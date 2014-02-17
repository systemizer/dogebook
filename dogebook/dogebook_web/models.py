from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class DogeImage(models.Model):
    fb_id = models.CharField(max_length=127)
    owner = models.ForeignKey(User)
    image = models.ImageField(upload_to="dogeimages",blank=True,null=True)
    comment = models.TextField(null=True,blank=True)
