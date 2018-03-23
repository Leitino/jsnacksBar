var somma=0

/*for (var i = 0; i < 5; i++) {
  var numUtente=parseInt(prompt('inserisci numero'))
  somma=(somma+numUtente)
}
  console.log(somma)*/

contatore=0
do {
  var nomeUtente=parseInt(prompt('inserisci numero'))
  somma=somma+nomeUtente
  contatore++
} while (contatore<=5);
console.log(somma)
