AOS.init();
const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu() {
    const menu = document.querySelector('.nav__content--menu');
    menu.classList.toggle('nav__content--menu-is-active')

}

btnMobile.addEventListener('click', toggleMenu)


const dataDoEvento = new Date("Aug 3, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciAteOEvento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciAteOEvento % minutoEmMs) / 1000);

    document.querySelector('.hero__contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('.contador').innerHTML = 'Evento Expirado'
    }
}, 1000);