'use strict'

const volumeDown = document.querySelector('.volume-down');
const volumeUp = document.querySelector('.volume-up');
const volumRect = document.querySelectorAll('.volume-rect');
const indicator = document.querySelector('.indicator')
let valueIndicator = 5;

function updateVolume() {
  indicator.textContent = valueIndicator;
  volumRect.forEach((rec, index) => {
    if (index < valueIndicator) {
      rec.classList.add('volume-rect__active');
    } else {
      rec.classList.remove('volume-rect__active');
    }
  })
}

function clickVolumeDown() {
  if (valueIndicator > 0) {
    valueIndicator -= 1;
    updateVolume();
  }
}

function clickVolumeUp() {
  if (valueIndicator < 10) {
    valueIndicator += 1;
    updateVolume();
  }
}

updateVolume();
volumeDown.addEventListener('click', clickVolumeDown);
volumeUp.addEventListener('click', clickVolumeUp);



// РЕШЕНИЕ ЭЕСПЕРТОВ!!!
// // Находим кнопки
// const volumeUpBtn = document.querySelector('.volume-up');
// const volumeDownBtn = document.querySelector('.volume-down');
// // Собираем в псевдомассив все прямоугольники
// const volumeRects = document.querySelectorAll('.volume-rect');
// // Находим индикатор громкости
// const indicator = document.querySelector('.indicator');

// // Задаем начальное значение громкости
// let currentIndex = 0;

// // Навешиваем обработчики
// volumeUpBtn.addEventListener('click', () => {
//   if (currentIndex > volumeRects.length - 1) return;
//   volumeRects[currentIndex].classList.add('volume-rect__active');
//   currentIndex++;
//   indicator.textContent++;
// });

// volumeDownBtn.addEventListener('click', () => {
//   if (!currentIndex) return;
//   currentIndex--;
//   indicator.textContent--;
//   volumeRects[currentIndex].classList.remove('volume-rect__active');
// });
