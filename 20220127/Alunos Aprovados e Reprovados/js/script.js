let nota1=parseFloat(prompt("Digite a nota da primeira avaliação"));
let nota2=parseFloat(prompt("Digite a nota da segunda avaliação"));
let nota3=parseFloat(prompt("Digite a nota da terceira avaliação"));
let media=(nota1+nota2+nota3)/3
if (media>=7){
    alert (`Aluno Aprovado, sua média foi de ${media}`)
}
else if(media>=4){
    alert (`Aluno deverá realizar Prova Final, sua média foi de ${media}`)
}
else {
    alert(`Aluno foi Reprovado, sua média foi de ${media}`)
}