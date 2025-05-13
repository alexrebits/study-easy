function openTab(id){
    var i,x
    x = document.getElementsByClassName("containerTab");
    // document.getElementById("nope").textContent = "nope!"
    for (i = 0; i<x.length;i++){
        x[i].style.display ="none";
    }
    document.getElementById(id).style.display ="block";
}
function test(){
    document.getElementById("nope").textContent = "nope!"
}
