let ehLigado =true// se for false nao executa

if (ehLigado){
    console.log("executou")
}

let possuiOvos = false // for true itens comprados ira ter leite e nao nuggets
let itensComprados = ""

if(possuiOvos){
    itensComprados= "leite"
}
else{
    console.log("passou na sessao de congelados")
    itensComprados = "nuggets"
}

console.log("itens comprados: " + itensComprados)