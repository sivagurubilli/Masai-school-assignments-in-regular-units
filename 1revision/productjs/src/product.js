function Product(name,brand,price,description) {
  // Complete the constructor function
 
this.name= name;
this.brand = brand;
this.price = price;
this.description = description;
this.sold = false;

}


Product.prototype.changePrice = function(n){
  return this.price=n
}

Product.prototype.toggleStatus = function(){
  return this.sold = !this.sold
}

let p = new Product("Shoe","puma",5000,"Sport Shoe")





p.changePrice(7000)
p.toggleStatus()

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
