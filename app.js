let del_btns=document.querySelectorAll(".del");
let add_btn=document.querySelector(".add");
let i=document.querySelector("#input");
let o=document.querySelector('ol');
add_btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=i.value;
    o.appendChild(li);
    let d=document.createElement("button");
    d.classList.add("del");
    d.innerHTML=" Delete ";
    li.appendChild(d);
    i.value="";
});
o.addEventListener("click", function(event){  
    if(event.target.nodeName=="BUTTON"){
        alert("do you want to delete the task?");
        let r =event.target.parentElement;
        r.remove();
    };
});