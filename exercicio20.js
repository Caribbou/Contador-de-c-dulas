function contaCedulas(numero){
    if (numero >= 200){
        var cedulas200 = Math.floor(numero/200)
        console.log(cedulas200 +' cédula(s) de 200 reais.')
        var valorRestante = numero % 200
    }
    if (valorRestante>=100){
        var cedulas100 = Math.floor(valorRestante/100)
        console.log(cedulas100 + ' cédula(s) de 100 reais.')
        var valorRestante = valorRestante % 100 
    }
    if (valorRestante>=50){
        var cedulas50 = Math.floor(valorRestante/50)
        console.log(cedulas50+ ' cédula(s) de 50 reais.')
        var valorRestante = valorRestante % 50
    }
    if (valorRestante>=25){
        var cedulas25 = Math.floor(valorRestante/25)
        console.log(cedulas25+ ' cédula(s) de 25 reais.')
        var valorRestante = valorRestante % 25
    }
    if (valorRestante>=10){
        var cedulas10 = Math.floor(valorRestante/10)
        console.log(cedulas10+ ' cédula(s) de 10 reais.')
        var valorRestante = valorRestante % 10
    }
    if (valorRestante>=5){
        var cedulas5 = Math.floor(valorRestante/5)
        console.log(cedulas5+ ' cédula(s) de 5 reais.')
        var valorRestante = valorRestante % 5
    }
    if (valorRestante>=2){
        var cedulas2 = Math.floor(valorRestante/2)
        console.log(cedulas2+ ' cédula(s) de 2 reais.')
        var valorRestante = valorRestante % 2
    }
    if (valorRestante>=1){
        var cedulas1 = Math.floor(valorRestante/1)
        console.log(cedulas1+ ' cédula(s) de 1 reais.')
        var valorRestante = valorRestante % 1
    }
}

contaCedulas(658)