const form = document.getElementById('registrazione');
const messaggio = document.getElementById('messaggio');

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  if(username === "" || email === ""){
    messaggio.textContent = "hai lasciato un parametro vuoto"
  } else{
    messaggio.textContent = "hai inserito i parametri corretti"
  }

});