AOS.init();

const dataDoEvento = new Date('Jun 30, 2025 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento -timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60
    const segundoEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteoEvento = Math.floor((distanciaAteOEvento % (diasEmMs)) / (horaEmMs));
    const minutosAteoEvento = Math.floor((distanciaAteOEvento % (horaEmMs)) / (minutoEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (minutoEmMs)) / (segundoEmMs));

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteOEvento}s`;


    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)