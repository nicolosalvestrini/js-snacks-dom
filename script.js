const numeriVincenti = [7, 13, 21, 42, 89];
const input = document.getElementById('numero-utente');
const bottone = document.getElementById('verifica');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', function() {
    const numeroScelto = parseInt(input.value, 10)
    if(vincitaPerdita(numeriVincenti, numeroScelto) === true){
        messaggio.textContent = "hai vinto"
        messaggio.classList.remove("text-danger")
        messaggio.classList.add("text-success")
    } else {
        messaggio.textContent= "hai perso"
        messaggio.classList.remove("text-success")
        messaggio.classList.add("text-danger")
    }


});
function vincitaPerdita(array, element) {
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] === element){
            return true
        }  
    }
    return false
}