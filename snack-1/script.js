const prodotti = ['Latte', 'Pane', 'Uova'];
const lista = document.getElementById('lista');
const bottone = document.getElementById('aggiungi');

for (let i = 0; i < prodotti.length; i++) {
  const li = document.createElement('li');
  li.textContent = prodotti[i];
  lista.appendChild(li);
}

bottone.addEventListener('click', function() {
  const nuoviProdotti = ['Pasta', 'Riso', 'Pomodori'];
  const random = Math.floor(Math.random() * nuoviProdotti.length);
  const li = document.createElement('li');
  li.textContent = nuoviProdotti[random];
  lista.appendChild(li);
  prodotti.push(random)
  console.log('Lunghezza array:', prodotti.length);
});