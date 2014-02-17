[![alt text](https://raw.github.com/systemizer/dogebook/master/dogebook/dogebook_web/static/imgs/cover-image.png "dogebomb")](https://dogebook.me)

dogebook
========


```
virtualenv myenv
source myenv
pip install -r requirements.txt

cd dogebook
./manage.py syncdb
./manage.py migrate
./manage.py runserver

./manage celery worker
```

We use celery as background processing the images.
We set a flag in the cache to act as shared memory to understand whether jobs are complete.
If DEBUG=True, you don't need a rabbitmq server as we've included kombu.
