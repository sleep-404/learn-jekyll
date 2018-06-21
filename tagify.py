import os
from rake_nltk import Rake
path = os.path.join(os.getcwd(), '_posts')
print(path)
path = (path+'/life')
post = open(path+'/2018-05-20-everything-begins-with-an-end.md')
contents = post.readlines()
count = 0
matter = ''
for content in contents:
    if content.rstrip() == '---' and count < 2 :
        count += 1
    elif count == 2:
        matter = matter + content
print(matter)
r = Rake()
r.extract_keywords_from_text(matter)
ranked = r.get_ranked_phrases_with_scores()
print(ranked)
