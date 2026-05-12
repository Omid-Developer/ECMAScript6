user.name = "Pete" // Yes, it works. The const keyword prevents reassignment of the variable itself, but it does not make the object immutable. You can still modify the properties of the object.
console.log(user.name); // Pete

