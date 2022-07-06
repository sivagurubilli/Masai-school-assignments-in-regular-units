

function sum(...args){
  if(arguments.length ===0 ){
    return "sum invoked without arguments"
  }else if ( arguments.length===1){
return "sum function needs atleast 2 arguments"
  }

   

const sumValue =[...args].reduce((a,c)=>a+Number(c),0);

 return Number(sumValue.toFixed(2))
}

module.exports = sum