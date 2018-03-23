var puntiGiocatore=0
var puntiPc=0
var scelte=['sasso', 'forbice', 'carta']

for (var i = 0; i < 3; i++) {
  var index= (Math.floor(Math.random()*3))
  var scelta=(scelte[index])
  var giocatore=prompt('scegli tra sasso,forbice e carta')
  console.log(giocatore + scelta)
  if ((scelta=='sasso') && (giocatore=='carta') || (scelta=='forbice') && (giocatore=='sasso') || (scelta=='carta') && (giocatore=='forbice')){
    puntiGiocatore++
    console.log(puntiGiocatore)
  }
  else {
    puntiPc++
    console.log(puntiPc)
  }
}
if (puntiGiocatore>puntiPc) {
  alert('hai totalizzato ' + puntiGiocatore + ' punti ' + ' il pc ha totalizzato ' + puntiPc + ' hai vinto')
}
else if (puntiPc>puntiGiocatore) {
  alert('hai totalizzato ' + puntiGiocatore + ' punti ' + ' il pc ha totalizzato ' + puntiPc + ' vince pc')
}
else {
  alert(pareggio)
}
