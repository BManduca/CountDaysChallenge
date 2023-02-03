const date = document.querySelector("[name=date]");
const startButton = document.querySelector("#startButton");

startButton.addEventListener('click', event => {
    localStorage.setItem('userDate', date.value);

    if (localStorage.userDate == "") {
        alert('Para iniciar o processo de contagem, você deve inserir uma data!');
    } else {
        window.location.replace("counter.html");
    }
});