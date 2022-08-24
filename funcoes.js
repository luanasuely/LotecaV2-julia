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
console.log(numSorte)
}

function lerNumero(value, pos){
    if(value < 1) {
        alert("Numero não pode ser zero ou negativo! digite novamente")
    } else if(value > 60){
        alert("Numero não pode ser maior que 60! digite novamente")
    } else if(numEsco.includes(value)){
        alert("Numero repetido! digite novamente")
    } else {
        numEsco[pos] = value
        console.log(numEsco)
    }

}

