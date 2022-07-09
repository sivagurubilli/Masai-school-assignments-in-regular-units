

function timeconv(milliseconds){
  

 if(milliseconds <10000){
   
  let seconds = Math.floor(milliseconds / 1000);
     return seconds +" seconds"
 }
 if(milliseconds > 10000 ){
    let minutes =Math.floor((milliseconds / 1000)/60);
   let  seconds = ((milliseconds / 1000)%60);
    
     return minutes +" minutes " +seconds +" seconds"
 }
   
}
module.exports = timeconv