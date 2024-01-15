const btnEl=document.getElementById("btn");
const birthdayEl=document.getElementById("birthday");
const resultEl=document.getElementById("result");




function calculateAge(){
    const birthdayValue=birthdayEl.value;
    if(birthdayValue===""){
        alert("Enter your birth date");
    }
    else
    {
        const age=getAge(birthdayValue);
        resultEl.innerHTML=`Your age is ${age} ${age>1?"years":"year"} old`;
    }

}
function getAge(birthdayValue){
    const currentDate=new Date();
    const birthdate=new Date(birthdayValue);
    let age=currentDate.getFullYear()-birthdate.getFullYear();
    const month=currentDate.getMonth()-birthdate.getMonth();
    if(month<0 || (month==0 && currentDate.getDate()<birthdate.getDate())){
        age--;
    }
    return age;

}




btnEl.addEventListener("click",calculateAge);
