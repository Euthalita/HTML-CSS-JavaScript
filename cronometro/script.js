var sec = 0
var min = 0
var hora =0
var intervalo
var clica = document.getElementsByClassName('.butao')

function doisDigits(digit){
    if (digit<10){
        return ("0"+digit)
    }else{
        return (digit)
    }
}

function start(){
   intervalo = setInterval(timer,1000) //Função própria do Java. Ela chama outra função a cada periodo de tempo, no caso, a cada 1000 mili-segundos, ou seja, a cada 1 segundo   
}

function pause(){
    clearInterval(intervalo)
}

function stop(){
    clearInterval(intervalo)
    sec=0
    min=0
    hora=0
    document.getElementById('watch').innerHTML = doisDigits(hora)+":"+ doisDigits(min)+":"+ doisDigits(sec)
}

function timer(){
    sec++
    
    if (sec == 60){
        sec=0
        min++
        
    }if (min == 60){
        min=0
        hora++
    }
    document.getElementById('watch').innerHTML = doisDigits(hora)+":"+ doisDigits(min)+":"+ doisDigits(sec)
}

