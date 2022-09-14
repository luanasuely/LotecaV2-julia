var numEsco = []
var numSorte = []

function sortearNumeros() {  

for(let i = 0; i < 6; i++){
    let num = Math.ceil(Math.random() * 60);
console.log(num)
if(!numSorte.includes(num) ) {
    numSorte[i] = num;
} else {
    i - i -1;
}

}
    console.log(numSorte);
    document.getElementById("sorteado").innerHTML = count;
    contarAcertos();
}

function lerNumero(value, pos){
    let num = Number(value)
    if(num < 1) {
        alert("Numero não pode ser zero ou negativo! digite novamente")
    } else if(num > 60){
        alert("Numero não pode ser maior que 60! digite novamente")
    } else if(numEsco.includes(num)){
        alert("Numero repetido! digite novamente")
    } else {
        numEsco[pos] = num
        console.log(numEsco)
    }
}

function contarAcertos(){
    let cont = 0;
    numEsco.forEach(function(value, index){
    if(numSorte.includes(value)){
        cont = cont + 1;
    }
    })
    document.getElementById("acertos").innerHTML = count;
}