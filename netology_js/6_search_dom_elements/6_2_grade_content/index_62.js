'use strict'

const stars = document.querySelectorAll('.star');

// моё решение
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((item, i) => {
      i <= index ? item.classList.add('star_active') : item.classList.remove('star_active')
    });
  })
})

// решение эксперта
// stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//         stars.forEach(s => s.classList.remove('star_active'));
//         const activeStars = [...stars].slice(0, index + 1);
//         activeStars.forEach((s) => s.classList.add('star_active'));
//     })
// })