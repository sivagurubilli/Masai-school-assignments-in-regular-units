


function toggler(...list){
  
    let current =-1;
    const length = list.length;
    return function(){
        current= (current+1)% length
        console.log(list[current])
       
    }
}

var toggle = toggler(1,2,3)


toggle()
toggle()
toggle()

  toggle()
