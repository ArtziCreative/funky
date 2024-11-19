// Button Elements
const weatherBtn = document.getElementById('weather-btn');
const confettiBtn = document.getElementById('confetti-btn');
const loveBtn = document.getElementById('love-btn');
const resultDiv = document.getElementById('result');

// Weather Button Action
weatherBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro&appid=b40299832aa8618c7aaeafc03b899a56&units=metric');
    const data = await response.json();
    resultDiv.innerText = `The weather in Rio de Janeiro is ${data.main.temp}°C with ${data.weather[0].description}.`;
  } catch (error) {
    resultDiv.innerText = 'Could not fetch the weather. Try again later.';
  }
});

// Confetti Button Action
confettiBtn.addEventListener('click', () => {
  resultDiv.innerText = '🎉 Surprise! 🎉';
  launchConfetti();
});

// Love Button Action
loveBtn.addEventListener('click', () => {
  resultDiv.innerText = '💖 I Love You! 💖';
});

// Confetti Function
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff6b6b', '#ffa69e', '#fad0c4', '#fbc2eb'],
  });
}