function UserInfo(name,location) {
this.name=name
this.location = location

}
const r = new UserInfo("Jane","Koramangala")
function serveFood(name,location,food) {
   return ("Serving"+" "+food+" "+"to"+" "+name+" "+"in"+" "+location)
}


function serveIn(name,location,food) {

 return serveFood(name,location,food)
}

let r1 =  serveIn("Jane","Koramangala","Samosa")
let r2 = serveIn("Kate", "HSR Layout", "Burger");
function billNote(q,p) {
  var tp =q*p
  return tp
}
function generateInVoice(name,location,qty,price) {
  
   var r4= billNote(qty,price)
   return (name+"'s"+" "+"bill is"+" "+"INR"+" "+r4)
}

  let r3 = generateInVoice("Amar", "Sarjaput", 2, 500);


export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
