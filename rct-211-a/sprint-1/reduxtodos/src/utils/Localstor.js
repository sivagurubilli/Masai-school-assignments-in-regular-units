// to load data some data

function  loaddata(key){
    try{
  let temp=  localStorage.getItem(key)

 temp = JSON.parse(temp)
 return temp
    }catch(e){
        return undefined
    }
}


function savedata(key,data){
    localStorage.setItem(key,JSON.stringify(data))

}

export {savedata,loaddata}