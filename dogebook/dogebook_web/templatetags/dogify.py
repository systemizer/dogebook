from django import template
import random

register = template.Library()

DEFAULT_DOGE_PHRASES = ['such drift', 'much dignity', 'very leeder',
			'many robe', 'much infinity', 'so gif',
			'very guitar', 'such fall', 'so trick', 'much feels',
			'many happy', 'very art', 'amaze', 'wow', 'excite',
			'to the moon!']

COMMON_WORDS = ["just","and","enough","hella","wicked","great","of","a","only","that"]
DOGE_OPERATORS = ["so","much","such","many","very","how","too"]
TO_REPLACE_WORDS = COMMON_WORDS + DOGE_OPERATORS

@register.filter
def dogify_comment(value):
    if not value:
        return random.choice(DEFAULT_DOGE_PHRASES)
    words = value.split(" ")
    if len(words) == 1:
        words = [random.choice(DOGE_OPERATORS),words[0]]
    else:
        words = map(lambda x: random.choice(DOGE_OPERATORS) if x.lower() in TO_REPLACE_WORDS else x,
                    words)

    return " ".join(words)
