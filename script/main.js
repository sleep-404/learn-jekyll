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
var myElement = document.querySelector("#workover");
var position = getPosition(myElement);

var count1=0;

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
  var heit = screen.height;


  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }

  console.log(yPos+' ypos');
  console.log(heit+' heit');
  if(yPos<=heit){
    // myElement.style.display = 'none';
    sidenav.className = 'after';
    console.log(yPos+':yPos and heit:'+heit+'done');
  }
  else {
    sidenav.className = 'before';
  }
  return {
    x: xPos,
    y: yPos
  };

}

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
  position = getPosition(myElement);
}
