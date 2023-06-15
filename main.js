const buttons = document.querySelectorAll('.button img');

function buttonClickHandler() {
    // console.log(this.alt);
    let inner = document.querySelector('.inner img');
    inner.src = `./img/${this.alt}.jpg`;
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
});