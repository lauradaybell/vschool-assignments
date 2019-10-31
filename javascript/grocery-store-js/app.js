const shopper = {
    firstName: "Bob",
    lastName: "Jensen",
    age: 54,
    groceryCart: ["apple", "orange", "steaks", "paper towels", "white rice"],
    isShopping: true,
    numberOfGroceries: function() {
        for (i = 0; i < this.groceryCart.length; i++) {
            let numberOfItems =+ 1;
        }
        return numberOfItems
        
    }
}

