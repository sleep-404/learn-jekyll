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
