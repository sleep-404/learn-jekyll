import os
import yaml
from rake_nltk import Rake
path = os.path.join(os.getcwd(), '_posts')
print(path)
category = 'life'
name = 'everything-begins-with-an-end.md'
post = open(path+'/'+category+'/2018-05-20-'+name)
contents = post.readlines()
count = 0
matter = ''
for content in contents:
    if content.rstrip() == '---' and count < 2 :
        count += 1
    elif count == 2:
        matter = matter + content
print(matter)
r = Rake(min_length=1, max_length=3)
r.extract_keywords_from_text(matter)
ranked = r.get_ranked_phrases_with_scores()
print(len(ranked),type(ranked))
tags='tags:'
for rank in ranked:
    tags = tags+'\n- name: '+rank[1]+'\n'+'  score: '+ str(rank[0])
tags = tags+'\n'
contents.insert(1,tags)
for content in contents:
    print(content)
post.close()
post = open(path+'/'+category+'/2018-05-20-'+name,'w');
post.writelines(contents)
post.close()
