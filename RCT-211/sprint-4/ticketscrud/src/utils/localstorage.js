

const getlocaldata =(key)=>{
  if(key){
    const data = localStorage.getItem(key);
    return data;
  }
}



const savelocaldata =(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
}


export {getlocaldata,savelocaldata}