console.log('1');
var count =0;




const press = document.getElementById('drop-down');
const drop = document.getElementById('side-content');
var change = function (){
  console.log(count);
  if(count%2==0){
    drop.style.display = 'block';
    count++;
  }
  else {
    drop.style.display = 'none';
    count++;
  }
}

var sidenav = document.getElementById('side-content');
var myElement = document.querySelector("#side-content");
var position = getPosition(myElement);


var count1=0,temp=0;

function getPosition(el) {
  var height = window.innerHeight;;
  var rect = myElement.getBoundingClientRect();
  console.log(height);
  console.log(rect.bottom+':rect.bottom and rect.left:'+rect.left);
  console.log(rect.top+':rect.top and rect.right:'+rect.right);
  if(rect.bottom<=height){
    sidenav.className='after';
    console.log("I have been executed");
  }
}

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
  position = getPosition(myElement);
}
