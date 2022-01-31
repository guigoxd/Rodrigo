let saldoMedio=parseFloat(prompt('Informe o saldo médio do cliente'))
if(saldoMedio<=200){
    alert(`Você não tem crédito. Saldo médio de ${saldoMedio}`)
}else if(saldoMedio <= 400){
    let credito = saldoMedio * 0.20
    alert(`Seu crédito é de ${credito} reais. Saldo médio de ${saldoMedio}`);
}else if(saldoMedio <= 600){
    let credito = saldoMedio * 0.30
    alert(`Seu crédito é de ${credito} reais. Saldo médio de ${saldoMedio}`);
}else {
    let credito = saldoMedio * 0.40
    alert(`Seu crédito é de ${credito} reais. Saldo médio de ${saldoMedio}`);
}