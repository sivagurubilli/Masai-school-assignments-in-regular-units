


document.querySelector(".button11").addEventListener("click",()=>{
  console.log("siav")
    
    const url="https://masai-api-mocker.herokuapp.com/auth/login"
    const opt ={
        method:"POST",
        headers:{
    Accept :"application/json",
    "Content-Type":"application/json"
        },
        body:JSON.stringify({password:document.querySelector(".inputreg").value,
        username:document.querySelector(".inputreg").value})
    }
    fetch(url,opt).then((res)=>res.json).then((data)=>console.log(data))
    })