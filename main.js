const maxImg = document.querySelector('.card__big-img img')

document.querySelectorAll('.card__bottom-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);
