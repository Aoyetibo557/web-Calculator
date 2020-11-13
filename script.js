

// VARIABLES
var prevAns = 0;
function insert(num){
    // document.form.textview.value=document.form.textview.value+num;
    document.form.textview.value+=num;
    
}
function equal(){
    var exp=document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp);
        prevAns = eval(exp);
    }
    document.getElementById("res").innerHTML = "Ans: "+prevAns;

    clear();

}
function clear(){
   document.form.textview.value= ' ';

}
function testClear(){
    clear();
}
function back(){
   var exp=document.form.textview.value;
   document.form.textview.value=exp.substring(0,exp.length-1);
}
function getAns(){
    
    // document.form.textview.value = prevAns;
    document.getElementById("res").innerHTML = "PrevAns: "+prevAns;
}


function addHide(entry){
    var doc = document.getElementById(entry);
    doc.classList.add("_hide");
}

function removeHide(entry){
    var doc = document.getElementById(entry);
    doc.classList.remove("_hide");
}
