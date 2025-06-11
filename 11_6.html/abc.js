const frutas = ["uva"," laranja", "tangerina", "melancia", "maçã"]
console.log(frutas)


 function procurar() {
    palavra = prompt("Digite a fruta para procurar ")
    pos = frutas.indexOf(palavra)
    alert(pos)
 }

 function buscarporposicao() {
    posicao=prompt("Escolha elemento do array")
    alert(frutas[posicao])
 }
function tamanhodoarray(){
alert(frutas.length)
}

    function fatiar(){
        pos1=prompt("Digite a posição do corte")
        const subfrutas= frutas.slice(pos1)
        console.log 
    }
    function listareach(){
        elemDiv= document.getElementById("listar")
        conteudoHTML = ""
        for(const cid of frutas)
            conteudoHTML+= '<li> $(cid)'
    }
elemeDiv.innerHTML = conteudoHTML

    function adicionarFinal(){
        
    }
    function remover(){
        if (frutas.length == 0) {
            alert("Array vazio")      
        } else {
            frutas.pop()
            console.log(frutas)
        }
  
    }
