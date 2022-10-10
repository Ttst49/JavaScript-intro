let word="bonjour"

secondResulat=word.slice(0,4)+word.slice(5,7)

//let resultat= word[0]+word[1]+word[2]+word[3]+word[5]+word[6]
let resultat= word.replace("ou","u")

let wordArray = word.split("")

let resultatTrois = wordArray.splice(4,1,"")

boom = wordArray.join("")

console.log(resultat)
console.log(secondResulat)
console.log(wordArray)
console.log(boom)

const paragraphe =document.querySelector(".rouge")


function mycall(){
    paragraphe.classList.toggle('bleu')
}

    setInterval(mycall, 2000)


let mots=["bonjour", "hello", "hola","你好"]

function remplaceMots(mots){
    for(i=0;i<=4;i++) {
        if (i > 4) {
            i = 0
        }
        paragraphe.replaceWith(mots[i])
    }
}

setInterval(remplaceMots, 2000)


//paragraphe.classList.toggle('bleu',)
