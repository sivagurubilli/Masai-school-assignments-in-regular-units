


document.querySelector(".button").addEventListener("click",()=>{
let data ={
    name:document.querySelector(".inputreg").value,
    email:document.querySelector(".inputreg").value,
    password:document.querySelector(".inputreg").value,
    username:document.querySelector(".inputreg").value,
    mobile:document.querySelector(".inputreg").value,
    desc:document.querySelector(".inputregdsc").value,

}

const url="https://masai-api-mocker.herokuapp.com/auth/register"
const opt ={
    method:"POST",
    headers:{
Accept :"application/json",
"Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}
fetch(url,opt).then((res)=>res.json).then((data)=>{console.log(data)})
})