let doacao=parseFloat(prompt('Digite o Valor da doação em Dólar (USD)'))
let cotacao=parseFloat(prompt('Digite a cotação diária'));
alert(`O valor da doação em Reais (BRL) será de ${doacao*cotacao}`)