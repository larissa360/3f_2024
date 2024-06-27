const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abaconteudo");
const contador = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date (2025,02,25);
const tempoObjetivo2 = new Date (2025,05,25);
const tempoObjetivo3 = new Date (2025,08,25);
const tempoObjetivo4 = new Date (2025,10,25);
let agora = new Date();
let segundos 
let minutos
let horas
let dias 
segundos = (tempoObjetivo1 - agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;

segundos =  Math.floor(segundos);
minutos =  Math.floor(minutos);
horas =  Math.floor(horas);
dias =  Math.floor(dias);
segundos = segundos%60;
minutos = minutos%60;
horas = horas%24;

function calculaTempo(X,Y){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dias
    segundos = (tempoObjetivo1 - agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;

segundos =  Math.floor(segundos);
minutos =  Math.floor(minutos);
horas =  Math.floor(horas);
dias =  Math.floor(dias);
segundos = segundos%60;
minutos = minutos%60;
horas = horas%24;
}

contador[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`
contador[1].textContent = tempoObjetivo2 - agora
contador[2].textContent = tempoObjetivo3 - agora
contador[3].textContent = tempoObjetivo4 - agora

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
            
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")


    }
}
