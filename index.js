//Adding event listeners for hovering over sections
let blocks = document.getElementsByClassName("column");
let chunks = document.getElementsByClassName("containerTab");
for(let i = 0; i<blocks.length;i++){
    var triggers = blocks[i];
    triggers.addEventListener("mouseover",function(){
        chunks[i].style.display = "block";
    });
    triggers.addEventListener("mouseout",function(){
        chunks[i].style.display = "none";
    })
}

function openTab(id){
    var i,x
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i<x.length;i++){
        x[i].style.display ="none";
    }
    document.getElementById(id).style.display ="block";
    // document.location = 'flashcards.html';
}

function test(){
    document.getElementById("nope").textContent = "nope!";
}

