const diaDoEvento = new Date('Feb 2, 2024 19:00:00')
const diaDoEventoEmMilli = diaDoEvento.getTime();

const contaHoras = setInterval(function(){
    const dataAtual = new Date();
    const dataAtualEmMilli = dataAtual.getTime();

    const tempoParaEvento = diaDoEventoEmMilli - dataAtualEmMilli;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasParaOEvento = Math.floor(tempoParaEvento / dias);
    const horasParaOEvento = Math.floor((tempoParaEvento % dias) / horas);
    const minutosParaOEvento = Math.floor((tempoParaEvento % horas) / minutos);
    const segundosParaOEvento = Math.floor((tempoParaEvento % minutos) / segundos);

    const contador = document.querySelector('.contador');

    contador.innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minutosParaOEvento}m ${segundosParaOEvento}s`;

    if (tempoParaEvento < 0){
        clearInterval(contaHoras)
        contador.innerHTML = 'Evento Expirado';
        contador.style.color = "red";
    }
}, 1000)