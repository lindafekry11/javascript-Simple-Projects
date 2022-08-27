
var result;

function calculate(x , y , z){

  switch(op){
    case '+':
      result= x+z;
      alert(x+y+z+"="+result);
      break;

    case '-':
      result= x-z;
      alert(x+y+z+"="+result);
      break;

      case '*':
        result= x*z;
        alert(x+y+z+"="+result);
        break;

        case '/':
          result= x/z;
          alert(x+y+z+"="+result);
            break;

        case '%':
          result= x%z;
          alert(x+y+z+"="+result);
            break;

        default:
            break;
            
           }}
 var firstNumber = Number(prompt("Enter the first number: "));
var op = prompt("Please select the (+ || - || * || / || % ) operation you want to do");
var secondNumber = Number(prompt("Enter the second number: "));

calculate(firstNumber,op,secondNumber);
myLoop:
while(1){
  var repeat=prompt("The final result is: " +result+" "+"do you need to do another operation with this result? (yes/no)");
  if(repeat=="yes"){
    var op = prompt("Please select the (+ || - || * || / || % ) operation you want to do");
    var secondNumber=Number(prompt("Enter the second number: "));
    var newCalculate=calculate(result,op,secondNumber);
  }
  else{
    break;
  }
}

   

   
     
    
     
    


   
          
     
      
    
   
   

