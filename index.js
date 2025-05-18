//Adding event listeners for hovering over sections
let blocks = document.getElementsByClassName("column");
let chunks = document.getElementsByClassName("containerTab");
for(let i = 0; i<blocks.length;i++){
    let triggers = blocks[i];
    triggers.addEventListener("mouseover",function(){
        chunks[i].style.display = "block";
    });
    triggers.addEventListener("mouseout",function(){
        chunks[i].style.display = "none";
    })
}

function openTab(id){
    let x = document.getElementsByClassName("containerTab");
    for (let i = 0; i<x.length;i++){
        x[i].style.display ="none";
    }
    document.getElementById(id).style.display ="block";
}

