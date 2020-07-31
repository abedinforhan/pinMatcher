//variables that can be accessed by every function
let randomVal;
let value;       
let previousVal="0"; 

 //generates four digits from 1000-9999
const pinGenerator=()=>{
    while(true) 
    {
     let randomStr=(Math.floor(1000+Math.random()*10000)).toString(); 
      if(randomStr.length>=5){
          continue;    //return to the loop as digits exceeds limit
      }
      randomVal=randomStr;
        break;   //if digits aren four length, break the  loop
    }
   const pinDisplay=document.getElementById('display-generated-pin');
   pinDisplay.value=randomVal;  //display generated pins
   }

//Handle Button Events
const buttonHandler=(event)=>{
  let currentValue=event.target.innerText;
  value=calculateValue(currentValue); //calculates the value for displaying
  UpdateDisplay(value);  //updtes display
  event.stopPropagation(); //stops the bubble propagation
}

//calculates value for display
const calculateValue=(currentValue)=>{
  if(previousVal==="0"){
    return currentValue;
  }
  else{
    let totalVal=(previousVal+currentValue);
    return totalVal;
  }
}

//Display the updated value

const UpdateDisplay=(value)=>{
  document.getElementById('submitDisplay').value=value;
   previousVal=value;
  }


//checking  both pins
const  pinChecker=()=>
{
  if(randomVal===value){
    document.getElementById('match').style.display='block';
  }
  else{
     document.getElementById('not-match').style.display='block';
  }
  event.stopImmediatePropagation();
}
  //Clear All Handler Function
const clearAll=()=>{
  UpdateDisplay("");
  event.stopImmediatePropagation();
}

//Earse the last Digit Handler
const eraseLast=()=>{
  if(!(value==="")){
    value=value.substring(0, value.length - 1); //Erase the last digit 
    UpdateDisplay(value); //update the value
  }
  
  event.stopPropagation();
}


 



