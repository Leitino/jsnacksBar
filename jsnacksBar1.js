var listaNumeri=[]


for (var i = 0; i < 2; i++) {
  var numUtente= prompt('inserisci numero')
  listaNumeri.push(numUtente)
}
console.log(listaNumeri)
  if (listaNumeri[0]>listaNumeri[1]) {
    alert(listaNumeri[0])
  }
  else {
    alert(listaNumeri[1])
  }
