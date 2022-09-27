function contagem(){
    var start = document.getElementById('inicio')
    var pass = document.getElementById('passo')
    var end = document.getElementById('fim')
    var resultado = document.getElementById('resultado')

    if (start.value == '' || pass.value == '' || end.value == ''){
        window.alert('Preencha todos os espaços')
        resultado.innerHTML = 'Impossível contar'

    }else {
        resultado.innerHTML = 'Calculando:<br>'
        let inicio = Number(start.value) /*É necessário colocar o value e não pode colocar as variaveis 
        convertidas pra números fora do escopo de if e else, se não, ela não funciona
        */
        let passo = Number(pass.value)
        let fim = Number(end.value)
        if (inicio < fim){
            for (let c = inicio; c <= fim; c += passo){ /*Pra usar o for, é necessário criar outra variavel*/
                resultado.innerHTML += `${c} - `  
            }
            resultado.innerHTML += 'FIM!'
        } else {
            for (let c = inicio; c >= fim; c-= passo)
                resultado.innerHTML += `${c} - `
        }
            resultado.innerHTML += 'FIM!'
    }
}



