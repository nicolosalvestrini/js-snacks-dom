const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", function (evento) {
  evento.preventDefault()
  alert("Hai cliccato: Monkey Island");
});

link2.addEventListener("click", function (evento) {
  evento.preventDefault()
  alert("Hai cliccato: Forrest Gump");
});

link3.addEventListener("click", function (evento) {
  evento.preventDefault()
  alert("Hai cliccato: Mostra di Picasso");
});
