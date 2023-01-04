const deleteButton= document.getElementById("delete-btn");
deleteButton.addEventListener('click',function(){
       //h3 ke select kora hoyeche 
   const deleteText=document.getElementById('delete-info');
       // h3 er display none kore diye hide kora hoyeche 
       deleteText.style.display='none';

})

// text field ea focus kora hole read alert hobe

const textField=document.getElementById("delete-confirm");
textField.addEventListener('focus',function(){
   document.body.style.backgroundColor='indianred';
})

//jodi focus kora na hoy tahole ager moto hobe 

const textField2=document.getElementById("delete-confirm");
textField2.addEventListener('blur',function(){
   document.body.style.backgroundColor='white';
})

// keybord ea delete chaple delete button tik hobe

const textField3=document.getElementById("delete-confirm");
textField3.addEventListener('keyup',function(event){
   // ekta new jinish...keyup hole (event.target.value)-->
   // Mane keyboard ea ja press korbo tai pao jabe (event.target.value)..te
   console.log(event.target.value);
   if(event.target.value=='Delete'){
       //hole delete button tik hobe 
       document.getElementById('delete-btn').removeAttribute("disabled");
   }
   else{
       //jodi delete bade onno kicu likhe tahole abr disable hobe
       document.getElementById('delete-btn').setAttribute("disabled",true);
   }
})