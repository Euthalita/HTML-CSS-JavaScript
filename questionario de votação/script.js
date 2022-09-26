function idade(){
    let old = document.querySelector('#idade')
    let resp = document.querySelector('#resp')
    let old1 = Number(old.value)

    if (old1 < 16){
        resp.innerHTML += `<p>Voto <strong>REPROVADO!</strong></p>`
    }else if (old1 < 18 || old1 > 65){  
    resp.innerHTML += `<p>Voto <strong>OPCIONAL</stong></p>`
    }else{
        resp.innerHTML += `<p>Voto <strong>OBRIGATÓRIO</strong></p>`}
    
    resp.innerHTML += `<p>O voto é <strong>opcional</strong> a partir de 16 anos e depois dos 65 anos. <strong>Obrigatório</strong> a patir dos 18 anos </p>`
}

function mostrar() {
    document.getElementById('formulario').style.display = 'block'
 }
