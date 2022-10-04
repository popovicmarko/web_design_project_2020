const from = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');

from.addEventListener('submit', (e) => {
    e.preventDefault();

    check();
});

function check() {
    const uservalue = username.value.trim();
    const emailvalue = email.value.trim();
    

    if(uservalue === ''){
        seterror(username, 'Username can`t be blank');
    } else {
        setsucc(username);
    };

    if(emailvalue === ''){
        seterror(email, 'Email can`t be blank');
    } else if(!checkemail(emailvalue)){
        seterror(email, 'Email is not valid');
    } else {
        setsucc(email);
    };

 

function seterror(input, message){
    const formgroup = input.parentElement;
    const small = formgroup.querySelector('small');

    small.innerText = message;
    formgroup.className = 'form-group fail';
}

function setsucc(input){
    const formgroup = input.parentElement;

    formgroup.className = 'form-group succ';
}

function checkemail(e){
    return e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )}

      function checheneme(n){
        return e.match(
            [A-z]
            
          )

    
    
};