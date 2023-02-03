const date = localStorage.userDate;
const restartButton = document.querySelector("#btnRestart");

restartButton.addEventListener('click', event => {
    window.location.replace('index.html');
});

function startCount() {

    let days = document.querySelector('.days h1');
    let hours = document.querySelector('.hours h1');
    let minutes = document.querySelector('.minutes h1');
    let seconds = document.querySelector('.seconds h1');

    const dateTime = new Date(date).getTime();

    let dateNow = new Date().getTime();
    let timeLeft = dateTime - dateNow;

    let daysLeft = Math.floor(timeLeft / (1000 * 86400));
    let hoursLeft = Math.floor((timeLeft % (1000 * 86400)) / (1000 * 3600) + 3);
    let minutesLeft = Math.floor((timeLeft % (1000 * 3600)) / 60000);
    let secondsLeft = Math.floor((timeLeft % (60000)) / 1000);

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;


    document.querySelector("#dayWord").innerHTML = daysLeft == "1" ? "Dia" : "Dias";
    document.querySelector("#hourWord").innerHTML = hoursLeft == "1" ? "Hora" : "Horas";
    document.querySelector("#minuteWord").innerHTML = minutesLeft == "1" ? "Minuto" : "Minutos";
    document.querySelector("#secondWord").innerHTML = secondsLeft == "1" ? "Segundo" : "Segundos";


    document.querySelector("#day").innerHTML = daysLeft <= "0" ? "Dia" : "Dias";
    document.querySelector("#hour").innerHTML = daysLeft <= "0" ? "Dia" : "Dias";
    document.querySelector("#minute").innerHTML = daysLeft <= "0" ? "Dia" : "Dias";
    document.querySelector("#second").innerHTML = daysLeft <= "0" ? "Dia" : "Dias";

}

setInterval(start, 1000);