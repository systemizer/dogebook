from django.core.cache import cache

class ProcessingManager(object):
    '''Simple Caching Wrapper that makes unique keys
    based on processing
    '''
    DEFAULT_TIMEOUT = 600 #shouldn't take more than 10 minutes
    _KEY_TEMPLATE = "PROCESSING_%s"
    def _get_key(self,key):
        return "%s" % key

    def __init__(self):
        self.cache = cache

    def get(self,key):
        self.cache.get(self._get_key(key))

    def set(self,key,value):
        self.cache.set(self._get_key(key),value)

    def has(self,key):
        return self.get(self._get_key(key)) != None
