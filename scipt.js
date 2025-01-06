const slider=document.getElementById('slider');
const sliderValue=document.getElementById('sliderValue');
sliderValue.textContent=slider.value;
// adding eventlistner on slider
slider.addEventListener('input',(event)=>{
    sliderValue.textContent=slider.value;
})

// passbox
const passBox=document.getElementById('passBox');
console.log(passBox);
//lowercase
const lowerCase=document.getElementById('lowerCase');
//uppercase
const upperCase=document.getElementById('upperCase');
//numbers
const numbers=document.getElementById('numbers');
//symbols
const symbols=document.getElementById('symbols');
//generate button
const genBtn=document.getElementById('genBtn');
console.log(genBtn);
// adding eventlistner on generate button
genBtn.addEventListener('click',function (){
    passBox.value=generatePassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let numChars="0123456789";
let symChars="~!@#$%^&*()";

// generate password function
function generatePassword(){
    let genPassword="";
    //include all chars those have been selected
    let allChars="";
    allChars+=lowerCase.checked ? lowerChars : "";
    allChars+=upperCase.checked ? upperChars : "";
    allChars+=numbers.checked ? numChars : "";
    allChars+=symbols.checked ? symChars : "";
    
   
    let i=1;
    while(i<=slider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}

//copy password function
let copyIcon=document.getElementById('copy');
copyIcon.addEventListener('click',()=>{
    if(passBox.value!=="" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title="password copied";
        copyIcon.innerText="check";

        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="copy password";
        },3000);
    }
    
})
