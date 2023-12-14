const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (
      e.target.id === 'grey' ||
      e.target.id === 'white' ||
      e.target.id === 'yellow' ||
      e.target.id === 'blue'
    ) {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// OR
// buttons.forEach(function(button){
//   button.addEventListener('click', function(e){
//     if(e.target.id === 'grey'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'yellow'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'blue'){
//       body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'white'){
//       body.style.backgroundColor = e.target.id;
//     }
//   })
// })
