///getting element reference
let inputArea=document.getElementById("inputArea")
let part1btn=document.getElementById("part1btn")
let part2btn=document.getElementById("part2btn")
let part3btn=document.getElementById("part3btn")
let part4btn=document.getElementById("part4btn")
let part5btn=document.getElementById("part5btn")

//divide and percentage btn reference
let divideButton=part1btn.children[3]
let percentageButton=part1btn.children[0]
let cancelButton=part1btn.children[2]
let clearButton=part1btn.children[1]



//basic numbers and button reference
let btn2ndArray=Array.from(part2btn.children)
let btn3rdArray=Array.from(part3btn.children)
let btn4thArray=Array.from(part4btn.children)

//zero and  . btn configuration
let zeroButton=part5btn.children[0]
let decimalButton=part5btn.children[1]
let equalButton=part5btn.children[2]


//main function to add
let addme=function addvalue()
{
    inputArea.value+=this.textContent
    
}
// calling function for each item on array
btn2ndArray.forEach(
    (item) =>{
            item.addEventListener('click',addme)
    }
)
btn3rdArray.forEach(
    (item) =>{
            item.addEventListener('click',addme)
    }
)
btn4thArray.forEach(
    (item) =>{
            item.addEventListener('click',addme)
    }
)

// for specific button
divideButton.addEventListener('click',addme,false)
percentageButton.addEventListener('click',addme,false)
zeroButton.addEventListener('click',addme,false)
decimalButton.addEventListener('click',addme,false)

// backspace button
let backbtn=function cancelEachInput()
{
  inputArea.value=inputArea.value.slice(0,inputArea.value.length-1)
}
cancelButton.addEventListener('click',backbtn,false)

// clear button function
let clear=function clearAll()
{
    inputArea.value=""
}
clearButton.addEventListener('click',clear)

// calculate button
let calculate=function calc()
{
  if(inputArea.value!="")
  {
  let finalAnswer=eval(inputArea.value)
  inputArea.value=finalAnswer
  }
  else{
    inputArea.value=""
  }
}

equalButton.addEventListener('click',calculate)