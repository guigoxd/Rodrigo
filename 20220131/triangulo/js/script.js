let ladoA=parseInt(prompt("Digite o valor do Lado A"));
let ladoB=parseInt(prompt("Digite o valor do Lado B"));
let ladoC=parseInt(prompt("Digite o valor do Lado C"));
if ((ladoA<ladoB+ladoC)&&(ladoB<ladoA+ladoC)&&(ladoC<ladoA+ladoB)) {
  if (ladoA==ladoB&&ladoB==ladoC) {
    alert("Triângulo Equilátero")
  }else if(ladoA==ladoB || ladoA==ladoC || ladoB==ladoC){
  		alert ("Triângulo Isósceles")
  }else if(ladoA!=ladoB&&ladoC!=ladoA&&ladoB!=ladoC) {
   alert("Triângulo Escaleno")
  }else{
  	alert("erro no código");
  }
}else {
alert("Triangulo inválido")
}

