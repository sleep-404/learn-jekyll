import os
import yaml
import datetime
from rake_nltk import Rake
path = os.path.join(os.getcwd(), '_posts')
print(path)
print('Enter the category : ', end='')
category = input()
print('Enter the name of the file: ', end='')
name = input()
print("was it created today ?? type 'yes' if true : ", end='')
check = input()
date=''
if check == 'yes' :
    x = datetime.datetime.now()
    date = str(x.year)
    if x.month<10:
        date = date + '-0' + x.month
    else:
        date = date + '-' + x.month
    if x.day < 10:
        date = date +'-0' + x.day
    else:
        date = date + '-' + x.day
else:
    print('Enter the date when it was created :', end='')
    date = input()
post = open(path+'/'+category+'/'+date+'-'+name)
contents = post.readlines()
count = 0
matter = ''
for content in contents:
    if content.rstrip() == '---' and count < 2 :
        count += 1
    elif count == 2:
        matter = matter + content
print(matter)
r = Rake(min_length=1, max_length=2)
r.extract_keywords_from_text(matter)
ranked = r.get_ranked_phrases_with_scores()
print(len(ranked),type(ranked))
tags='tags:'
for rank in ranked:
    tags = tags+'\n- name: '+rank[1]+'\n'+'  score: '+ str(rank[0])
tags = tags+'\n'
contents.insert(1,tags)
post.close()
post = open(path+'/'+category+'/'+date+'-'+name,'w');
post.writelines(contents)
post.close()
