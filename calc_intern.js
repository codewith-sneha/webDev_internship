let btns =document.querySelectorAll(".btn");
let str='';
let input = document.querySelector(".input");
Array.from(btns).forEach((btn)=>{
btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML=='='){
        str=eval(str);
input.value=str;
    }
    else if(e.target.innerHTML=='CLR')
    {
        str="";
        input.value=str;
    }
    else if(e.target.innerHTML=='DEL'){
        str=str.substring(0,str.length-1);
        input.value=str; 
    }
    else{
        str+=e.target.innerHTML;
        input.value=str;
        console.log(str);
    }
})
})