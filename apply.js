
let container=document.getElementById("con");
let form=document.getElementById("form");
let submit1=document.getElementById("submit1");
let submit=document.getElementById("submit");
let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let email=document.getElementById("email");
let password=document.getElementById("password");
let education=document.getElementById("education");
let photo=document.getElementById("photo");
let success=document.querySelector(".success");


function down(){
submit1.addEventListener("click",e=>{

  form.classList.toggle("down");
 
  
  })
}
down();

submit.addEventListener("click",function(e){
  form.classList.toggle("congraturation");
  success.classList.toggle("message");
  if(firstname.value && lastname.value && email.value && password.value && photo.value &&education.value){
    success.textContent=` Congratulations ${firstname.value} ${lastname.value} We have received your application wait feedback in 48 hours`;
    
}
else{
  success.textContent=`Please ${lastname.value}, fill all the fields correctly!!`;

  setTimeout(()=>{
 message();
  },5000)
 
}

})

function message(){ 
  success.textContent=`Refresh and click on Apply button to obtain the form again.`
}
