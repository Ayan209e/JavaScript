const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i=1;i<=6;i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const color = function(){
  document.body.style.backgroundColor = randomColor();
}

let intervalId;

start.addEventListener('click',function(){
  if(!intervalId){
    intervalId = setInterval(color, 1000); 
  }
})

stop.addEventListener('click',function(){
  clearInterval(intervalId);
  intervalId = null;
})



