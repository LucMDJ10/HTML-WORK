const divareajogo = document.getElementById("areajogo")
const diviniciar = document.getElementById("diviniciar")
function iniciar(){
    fecharbotaoinicio()
    abrirareajogo()
}
function fecharbotaoinicio(){
 diviniciar.innerHTML=""
}

function abrirareajogo(){
  divareajogo.classList.add("answer-btn")
}  let botaopergunta= document.createElement ("button")
    botaopergunta.textContent= perguntas[0]
    areaperguntas.appendChild(botaopergunta)


const perguntas=[
   {pergunta:"Qual é o maior deserto do mundo?",opcoes:["Saara,","Antartida","Atacama"]}
   {pergunta:  "Qual é a capital do Brasil?",opcoes:["RJ","SP","Brasilia"]}
   {pergunta: "Qual é a capital da Austrália?",opcoes:["Palhoça", "Urubuci","Canguru","Sydney"]}
   {pergunta: "Qual é o país com maior população no mundo?",opcoes:["China","India","Pará"]}
   {pergunta:  " Qual a linha imaginária que atravessa o Brasil?",opcoes:["Pandorga","Equador"]}
   {pergunta: "Qual o oceano que banha o Brasil?",opcoes:["Atlantico","Pacifico","Indigo","Sexydasilva"]}
    ]
 let botaopergunta=document.createElement("button")
 let indiceperguntas=0

 function iniciarjogo(){
    fecharbotaoinicio()
    abrirareajogo()
 }

 function abrirareajogo(){
    divareajogo.classList.add("active")
    titulopergunta.textContent=perguntas(indiceperguntas).pergunta
    perguntas[indiceperguntas].opcoes.forEach(opcao=>)
     botaopergunta.textContent=perguntas[indiceperguntas]
     botaopergunta.classList.add("answer-btn")
     areaperguntas.appendChild(botaopergunta)
 }
 function proximapergunta(){
    indiceperguntas++
    if(indiceperguntas< perguntas.length)
      abrirareajogo()
   else
 }