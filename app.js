const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  const numOne = Number(e.target.elements.numberOne.value)
  const numTwo = Number(e.target.elements.numberTwo.value)
  
  {document.getElementById("output").innerHTML=""}

  var small;
  var large;
  let evenNums = [];

  if(numOne > numTwo){
    small = numTwo;
    large = numOne
  } 
  else{
    small = numOne
    large = numTwo
  }
 
  if(isNaN(numTwo)){document.getElementById("output").innerHTML+=`<p class="text-danger m-0">Number 2 input ${e.target.elements.numberTwo.value} is not a valid number</p>`;}

  if(isNaN(numOne)){document.getElementById("output").innerHTML+=`<p class="text-danger m-0">Number 1 input ${e.target.elements.numberOne.value} is not a valid number</p>`;}

  if(numOne < 2 || numOne > 100){document.getElementById("output").innerHTML+=`<p class="text-danger m-0">Number 1 input ${numOne} is not in the range of 2 and 100</p>`;}

  if(numTwo < 2 || numTwo > 100){document.getElementById("output").innerHTML+=`<p class="text-danger m-0">Number 2 input ${numTwo} is not in the range of 2 and 100</p>`;}
  
  else if(numOne >= 2 && numOne <= 100 && numTwo >= 2 && numTwo <= 100){
    for(var i = small; i<=large;i+=1){
      if(i%2===0){evenNums.push(i)}
    }
    document.getElementById("output").innerHTML=`<p class="text-info m-0">There are ${evenNums.length} even numbers.</p>`;

    if(evenNums.length > 0){
      document.getElementById("output").innerHTML+=`<p class="text-info m-0">${evenNums.toString()}</p>`;
    }
  
  
  }
  e.preventDefault(); 
});