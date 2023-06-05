const fraseDoDia = document.getElementById('frase_do_dia');

async function criaFrase() {
    let frase = await fetch('https://api.adviceslip.com/advice');
    let fraseConvertida = await frase.json();
    fraseDoDia.innerText = fraseConvertida.slip.advice;
}

criaFrase();

