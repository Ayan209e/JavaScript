const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const wightType = document.querySelector('#wightType');


  if(height === '' || height<=0 || isNaN(height)){
    result.innerHTML = `Please Provide a Valid Height ${height}`
  }
  else if(weight === '' || weight<=0 || isNaN(weight)){
    result.innerHTML = `Please Provide a Valid Weight ${weight}`
  }
  else{
    const bmi = (weight / ((height**2)/10000)).toFixed(2);
    result.innerHTML = `BMI : ${bmi}`

    if(bmi<18.6){
      wightType.innerHTML='Under Weight!!'
    }else if(bmi>18.6 && bmi<24.9){
      wightType.innerHTML='Normal Weight'
    }
    else{
      wightType.innerHTML='Over Weight!!'
    }
  }

})