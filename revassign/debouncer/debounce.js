
const input = document.querySelector("input")
const defaulttext= document.getElementById("default")
const debouncetext= document.getElementById("debounce")


const updatedebouncetext = debounce((text)=>{
    debouncetext.textContent= text
})






input.addEventListener("input",e=>{
    defaulttext.textContent= e.target.value
    updatedebouncetext(e.target.value)
   
})

function debounce(cb,delay=1000){
    let timeout
    return (...args)=>{
        clearTimeout(timeout)
       timeout= setTimeout(()=>{
            cb(...args)
        },delay)
    }
}
