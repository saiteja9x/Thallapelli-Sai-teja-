 const btni= document.getElementById("btni");
 const btnr = document.getElementById("btnr");
 const btnd = document.getElementById("btnd");
 const countlabel= document.getElementById("countlabel");
 let count=0;
 btni.onclick=function(){
  count++;
  countlabel.textContent=count;
 }
 btnd.onclick=function(){
  count--;
  countlabel.textContent=count;
 }
 btnr.onclick=function(){
  count=0;
  countlabel.textContent=count;
 }



  
