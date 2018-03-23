var nomi =['Alessandro ', 'Fabio ', 'Samuel ', 'Davide ']
var cognomi=['Rossi', 'Verdi', 'Gialli', 'Neri']
var nomiCognomi=[]

for (var i = 0; i < 4; i++) {
  var index= (Math.floor(Math.random()*4))
  var nomCasuale=(nomi[index])
  var cognCasuale=(cognomi[index])
  nomiCognomi.push(nomCasuale+cognCasuale)
}
  console.log(nomiCognomi)
