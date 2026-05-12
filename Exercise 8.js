let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';
              if (login == 'Employee') {
                console.log('Hello');
              } else if (login == 'Director') {
                console.log('Greetings');
              } else if (login == '') {
                console.log('No login');
              } else {
                console.log('');
              } 