AOS.init();

let anoNiverStart = new Date();
anoNiverStart = anoNiverStart.getFullYear();

const contaAsHoras = function() {
    setInterval(function() {
    let dataNiver = new Date(`Mar 30, ${anoNiverStart}  00:00:00`);

    const timeStampDoNiver = dataNiver.getTime();
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteONiver = timeStampDoNiver - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteONiver = Math.floor(distanciaAteONiver / diaEmMs);
    const horasAteONiver = Math.floor((distanciaAteONiver % diaEmMs) / horaEmMs);
    const minutosAteONiver = Math.floor((distanciaAteONiver % horaEmMs) / minutoEmMs);
    const segundosAteONiver = Math.floor((distanciaAteONiver % minutoEmMs) / 1000);

    if (distanciaAteONiver < 0) {
        clearInterval(contaAsHoras);
        anoNiverStart += 1;
        contaAsHoras();
    }
    else {
        document.getElementById('contador').innerHTML = `
        <ul class="container__contador__item">
        <li>
        <h2>${diasAteONiver}</h2>
        <span>dias
        </li>
        <li>
        <h2>${horasAteONiver}</h2>
        <span>horas</span>
        </li>
        <li>
        <h2>${minutosAteONiver}</h2> 
        <span>minutos</span>
        </li>
        <li>
        <h2>${segundosAteONiver} </h2>
        <span>segundos</span>
        </li>`;
    }

}, 1000);};

contaAsHoras();