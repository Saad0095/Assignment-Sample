  const futureDate = new Date('March 15, 2024 00:00:00').getTime();

  const timerInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const currentDate = new Date().getTime();

    const timeRemaining = futureDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerElement.innerHTML = "Countdown is over!";
    }
  }

