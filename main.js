let word="bonjour"

secondResulat=word.slice(0,4)+word.slice(5,7)

//let resultat= word[0]+word[1]+word[2]+word[3]+word[5]+word[6]
let resultat= word.replace("ou","u")

let wordArray = word.split("")

//let resultatTrois = wordArray.splice(4,1,"")

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

//function remplaceMots(change){
 //   for(i=0;i<4;i++) {
   //     console.log(change[i])
     //   paragraphe.textContent= change[i]

       // if (change[i]==="你好") {
         //   remplaceMots(change)
        //}

    //}

//}

//setInterval(remplaceMots(mots), 2000)

for(let i=0;i<mots.length; i++){
    setTimeout(()=>{
        document.querySelector('.rouge').textContent =mots[i]
    },1000)
}


let unephrase="Le doux dos dodu du dindon farçi se dandinait doucement"

let TableaudeMot=unephrase.split(" ")

let para= document.createElement("p");
para.textContent = "Hey"
console.log(para)

let body= document.querySelector("body")
    body.appendChild(para)

//TableaudeMot.forEach((mots)=>{
    //let paragraph= document.createElement("p")
    //paragraph.textContent= mots
    //body.appendChild(paragraph)
//})

for(let i=0;i<TableaudeMot.length;i++){
    let paragraphe = document.createElement("p")
    if(TableaudeMot[i] === "dindon"){
        paragraphe.textContent = "poulet"
    }
    else {
        paragraphe.textContent = TableaudeMot[i]
    }
    body.appendChild(paragraphe)
}

//paragraphe.classList.toggle('bleu',)
