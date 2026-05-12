let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() // Uncaught ReferenceError: sayHi is not defined because sayHi is defined inside the if block and is not accessible outside of it.