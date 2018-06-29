var posts = document.getElementsByName('posts'),i;
// console.log(posts);
var tags = [];
var analized = [];
var i;
for(i=0;i<posts.length;i++){
  tags.push(posts[i].childNodes[3]);
}
// console.log(tags[0].children[0].innerHTML.length);

var query = 'test';
var patt = new RegExp(query,'gim');


//Started
for(k=0;k<posts.length;k++){
  var j=tags[k].children.length-2,score=0;
  var title = posts[k].childNodes[1].children[0].innerHTML;
  var meta = posts[k].childNodes[1].children[1].innerHTML;
  if(patt.test(title)){
    score+=5;
  }
  if(patt.test(meta)){
    score+=4;
  }
  i=0;
  var mid = search(query,i,j) ;
  var first,last;
  if(mid!=-1){
    // console.log(mid+' mid ');
    // console.log(tags[k].children[mid].innerHTML)
    first = range(mid,query[0])[0];
    last = range(mid,query[0])[1];
    // console.log(first+' :first ; last: '+last);
    var title;
    for(i=first;i<last;i=i+2){
      if(patt.test(tags[k].children[i].innerHTML)){
        score=score+Number(tags[k].children[i+1].innerHTML);
      }
    }
  }
  // console.log(score+' I am the score');
  if(score){
    var key = new Key_value(k,score);
    analized.push(key);
    console.log("Yoyo pandua");
  }
}
//ended
var key = new Key_value(10,11);
analized.push(key);


analized.sort(function compare(a,b){
  if (a.score < b.score)
    return 1;
  if (a.score > b.score)
    return -1;
  return 0;
});
console.log(analized);

function range(mid,query_1){
  var x=mid,y=mid;
  while(tags[0].children[x].innerHTML[0]==query_1){
    x=x-2;
  }
  while(tags[0].children[y].innerHTML[0]==query_1){
    y=y+2;
  }
  x=x+2,y=y;
  return [x,y];
}

function search(query,i,j) {
  var  mid = ( (i+j) - ( (i+j)%2 ) ) /2;
  if(mid%2){
    mid=mid-1;
  }
  while(i<=j){
    // console.log( i + ' = low ;' + mid + ' = mid ;'  + j + ' = high;');
    if(tags[0].children[mid].innerHTML[0].localeCompare(query[0])==0){
      return mid;
    }
    else if(tags[0].children[mid].innerHTML[0].localeCompare(query[0])==1){
      j = mid-2;
    }
    else {
      i = mid+2;
    }
    mid = ( (i+j) - ( (i+j)%2 ) ) /2;
    if(mid%2){
      mid=mid-1;
    }
  }
  return -1;
}

function Key_value(index,score){
  this.index = index;
  this.score = score;
}
