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

//ended
var key = new Key_value(10,11);
analized.push(key);


console.log(analized);


function Key_value(index,score){
  this.index = index;
  this.score = score;
}
