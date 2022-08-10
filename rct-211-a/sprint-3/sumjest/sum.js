


 function sum(...args){
    if (args.length === 0) {
        return "sum invoked without arguments";
      } else if (args.length === 1) {
        return "sum functions needs atleast 2 arguments";
      }
    let res =[...args].reduce((a,b)=>a+Number(b),0);

    return res
}

module.exports = sum