const buttons = document.querySelectorAll('.button');

function buttonClickHandler() {
    console.log(this.innerHTML);
    let inner = document.querySelector('.inner img');
    inner.src = `./img/${this.innerHTML}.jpg`;
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
});