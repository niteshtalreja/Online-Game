const basket = document.getElementById('basket');
const egg = document.getElementById('egg');
const scoreText = document.getElementById('score');

let basketX = 160;
let eggX = Math.floor(Math.random() * 380);
let eggY = 0;
let score = 0;
let speed = 2;

function moveBasket(e) {
  if (e.key === 'ArrowLeft' && basketX > 0) {
    basketX -= 20;
  } else if (e.key === 'ArrowRight' && basketX < 320) {
    basketX += 20;
  }
  basket.style.left = basketX + 'px';
}

function dropEgg() {
  eggY += speed;
  egg.style.top = eggY + 'px';
  egg.style.left = eggX + 'px';

  if (eggY > 470) {
    if (eggX > basketX && eggX < basketX + 80) {
      score++;
      scoreText.innerText = 'Score: ' + score;
      eggY = 0;
      eggX = Math.floor(Math.random() * 380);
      speed += 0;
    } else {
      alert('Game Over! Final Score: ' + score);
      eggY = 0;
      eggX = Math.floor(Math.random() * 380);
      score = 0;
      speed = 3;
      scoreText.innerText = 'Score: 0';
    }
  }

  requestAnimationFrame(dropEgg);
}

document.addEventListener('keydown', moveBasket);
dropEgg();
