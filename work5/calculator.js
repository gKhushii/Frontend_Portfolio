butt=document.querySelectorAll(".bb");
t=document.querySelector(".text");
e=document.querySelector(".equal");
c=document.querySelector(".clear");
r=document.querySelector(".remove");
let exp="";
let cpy=exp;

const solve=(exp)=>{
    t.innerText=eval(exp);
}

butt.forEach((b)=>{
b.addEventListener("click",()=>{
    t.innerText+=b.innerText;
    exp=t.innerText;
    cpy=exp;
    console.log(exp);
});
});

e.addEventListener("click",()=>{
    solve(exp);
})

c.addEventListener("click",()=>{
    t.innerText="";
})
r.addEventListener("click",()=>{
    cpy=cpy.slice(0,-1);
    t.innerText=cpy;

})