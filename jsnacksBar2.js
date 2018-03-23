var listaParole=[]

for (var i = 0; i < 2; i++) {
  var parolaUtente= prompt('inserisci parola')
  listaParole.push(parolaUtente)
}

if (listaParole[0].length>listaParole[1].length) {
  alert(listaParole[0])
  alert(listaParole[1])
}
else {
  alert(listaParole[1])
  alert(listaParole[0])
}
