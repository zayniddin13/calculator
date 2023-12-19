let display=document.querySelector('.display')
let digit=document.querySelectorAll('.digit')
let input=document.querySelector('.input')
let pilusMinus=document.querySelector('.pilus_minus')
const specialChars = ["/100*", "/", "*", "+", "-", "=",];
let output = ""; 
const calculate = (btnValue) => {
  if (btnValue == "=" && output !== "") {
    output = eval(output);
    result()
  } else if (btnValue == "AC") {
    output = "";
  }else if (output === "" && specialChars.includes(btnValue)){
   return input.value =""
  }else{
    output += btnValue;
  }
  console.log(output);
  
};
function result() {
  input.value = output; 
}
digit.forEach(item=> {
    item.addEventListener('click', (e)=>{
     
      let son =e.target.dataset.value
      if (!specialChars.includes(son)) {
        console.log('si');
        input.value+=son
        calculate(son);
      }else{
        input.value=""
        calculate(son);
      }
       
        
    })
});
pilusMinus.addEventListener("click", ()=>{
output=="" ? output="-" : output=(output-0)*(-1)
input.value=  (input.value-0)*(-1)
})
