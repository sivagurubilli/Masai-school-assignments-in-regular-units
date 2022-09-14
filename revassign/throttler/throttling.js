
const input = document.querySelector("input")
const defaulttext= document.getElementById("default")
const throttletext= document.getElementById("throttle")





const updatethrottletext = throttle((text)=>{
  throttletext.textContent= text
})


input.addEventListener("input",e=>{
    defaulttext.textContent= e.target.value
    
    updatethrottletext(e.target.value)
})


function throttle(cb,delay=1000){
let shouldwait = false
  let waitingargs
    return (...args)=>{
        if(shouldwait){
            waitingargs = args 
            return 
        }
    cb(...args)
    shouldwait = true
    setTimeout(()=>{
        if(waitingargs==null){
          shouldwait= false
        }else{
            cb(...waitingargs)
            waitingargs =null
        }
    },delay)
    }
}
