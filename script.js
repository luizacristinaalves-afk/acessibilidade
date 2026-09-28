const botoesFonte = document.querySelectorAll('.botao-fonte');

botoesFonte.forEach(botao => {
    botao.addEventListener('click', function (event) {
        event.preventDefault();

        const alvo = this.getAttribute('href');

        if (alvo === '#fonte-pequena') {
            document.body.style.fontSize = '14px';
        } 
        else if (alvo === '#fonte-normal') {
            document.body.style.fontSize = '16px';
        } 
        else if (alvo === '#fonte-grande') {
            document.body.style.fontSize = '20px';
        }
    });
});

