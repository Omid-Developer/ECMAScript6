let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';
console.log(message); // Hello, Greetings, No login, or '' depending on the value of login