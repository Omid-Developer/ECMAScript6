let user = {
  name: "John",
  years: 30
}
 
if (user.name === "John") {
  console.log("Hello, John!");
}else {  console.log("Hello, stranger!");
}   
if  (user.years > 18) {
  console.log("You are an adult.");
}else {  console.log("You are a minor.");
}
if (user.isAdmin) {
  console.log("You have admin privileges.");
}else {  console.log("You do not have admin privileges.");}
console.log(user.name);
console.log(user.years);    
console.log(user.isAdmin);      
