let word="bonjour"

secondResulat=word.slice(0,4)+word.slice(5,7)

//let resultat= word[0]+word[1]+word[2]+word[3]+word[5]+word[6]
let resultat= word.replace("ou","u")

let wordArray = word.split("")

let resultatTrois = wordArray.splice(4,1,"")



console.log(resultat)
console.log(secondResulat)
console.log(wordArray)

