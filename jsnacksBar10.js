var film1 = {
  nome : 'ciao ciao',
  attori:['qui', 'quo', 'qua'],
  durata: 120,
  voto:[8, 7, 6],
  genere:'horror',
}
var film2 = {
  nome : 'mr & mrs smith',
  attori:['Brad Pitt', 'Angelina Jolie'],
  durata: 130,
  voto:[7, 8, 7],
  genere:'drammatico',
}
var film3 = {
  nome : 'arrivedorci',
  attori:['stalio', 'olio'],
  durata: 100,
  voto:[9, 6, 7],
  genere:'comico',
}

var listaFilm=[film1,film2,film3]

var sommaDurata=0
var mediaDurata=0
for (var i = 0; i < listaFilm.length; i++) {
  sommaDurata=sommaDurata+listaFilm[i].durata
  mediaDurata=sommaDurata/listaFilm.length
}

console.log(sommaDurata)
console.log(mediaDurata)
