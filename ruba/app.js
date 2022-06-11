function sendsms(){
   value1=document.getElementById("myinput1").value;
   value2=document.getElementById("myinput2").value;
   element=document.createElement("li");
   if(value1!="")
   {
   text1=document.createTextNode(value1);
   element.appendChild(text1);
   mydiv=document.getElementById("mydiv");
   mydiv.appendChild(element);
   element.style.color="blue";
   document.getElementById("myinput1").value="";
   }
   else if(value2!=""){
    text2=document.createTextNode(value2);
    element.appendChild(text2);
    mydiv=document.getElementById("mydiv");
    mydiv.appendChild(element);
    element.style.color="red";
    document.getElementById("myinput2").value="";
   }

}