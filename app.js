


let randomVal;
let value;       //variables that can be accessed by every function
let previousVal="0"; 

//Generates Pins
const pinGenerator=()=>{
    while(true)  //generates four digits from 1000-9999
    {
     let randomStr=(Math.floor(1000+Math.random()*10000)).toString(); 
      if(randomStr.length>=5){
          continue;    //return to the loop as digits exceeds limit
      }
      randomVal=randomStr;
        break;   //if digits are okay break the  loop
    }
   const pinDisplay=document.getElementById('dis-generated-pin');
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
  
const clearAll=()=>{
  UpdateDisplay("");
  event.stopImmediatePropagation();
}



 



// document.getElementById('generateBtn').addEventListener('click',()=>{
 
//  while(true)
//  {
//    randomStr=(Math.floor(1000+Math.random()*10000)).toString(); 
  
//    if(randomStr.length>=5){
//      continue;
//   }
//   randomStr=parseFloat(randomStr);
//   console.log(randomStr);
//   break;
//  }

//  const pinDisplay=document.getElementById('pinOutput');
//  pinDisplay.disabled=true;
//  pinDisplay.value=randomStr;
// //  console.log(randomStr);

// })


// const matchPins=()=>{
//   document.getElementById('submitBtn').addEventListener("click",()=>
//   {
//       if(randomStr==value){
//       document.getElementById('match').style.display='block';
//       }
//       else{
//       document.getElementById('not-match').style.display='block';
//       }
//     })
//   }


// const UpdateDisplay=(pressedvalue)=>{
//   if(previousVal==="0"){
//     value=pressedvalue;
//   }
//   else{
//     value=previousVal+pressedvalue;
//   }
  
//    document.getElementById('submitDisplay').value=value;
//    previousVal=value;
//    matchPins();

//    }



// let button=document.getElementsByClassName('button')
// for(let i=0;i<button.length;i++){
//   let items=button[i];
//   items.addEventListener("click",(event)=>{
//      let currentVal=event.target.innerText; /*getting current      buttonvalue */
//     UpdateDisplay(currentVal);
//      });
//   }