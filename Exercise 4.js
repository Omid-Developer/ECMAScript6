let user={}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user); // {surname: "Smith"}

const user = {
  name: "John"
}
// does it work?