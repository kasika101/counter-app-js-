
    let count = 0;

document.getElementById("add").addEventListener("click" , function(){
   count++;
   document.getElementById("txt").value = count;
   //console.log(count)
});
document.getElementById("minus").addEventListener("click" , function(){
    count--;
    document.getElementById("txt").value = count;
    
    //console.log(count)
 });
 document.getElementById("reset").addEventListener("click" , function(){
    count = 0;
    document.getElementById("txt").value = count;
    //console.log(count)
 });