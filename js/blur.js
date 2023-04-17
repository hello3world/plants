/* Service */
let lawnBtn = document.querySelector('.lawn');
let gardenBtn = document.querySelector('.garden');
let plantingBtn = document.querySelector('.planting');
let lawnChoice = document.querySelectorAll('.lawn_ch');
let gardenChoice = document.querySelectorAll('.garden_ch');
let plantingChoice = document.querySelectorAll('.planting_ch');
console.log(lawnBtn);
console.log(gardenBtn);
console.log(plantingBtn);
console.log(lawnChoice);
console.log(gardenChoice);
console.log(plantingChoice);

let stackBnt = [];

// для кнопки lawn
lawnBtn.addEventListener('click', function () {
  let activeBtn = document.querySelectorAll('.service__btn._active');

  if (!lawnBtn.classList.contains('_active') && activeBtn.length !== 2) {
    lawnBtn.classList.add('_active');
    lawnChoice.forEach(el => el.classList.remove('_blure'));

    if (!gardenBtn.classList.contains('_active')) {
      gardenChoice.forEach(el => el.classList.add('_blure'));
    }

    if (!plantingBtn.classList.contains('_active')) {
      plantingChoice.forEach(el => el.classList.add('_blure'));
    }
  } else {
    lawnBtn.classList.remove('_active');

    if (gardenBtn.classList.contains('_active') || plantingBtn.classList.contains('_active')) {
      lawnChoice.forEach(el => el.classList.add('_blure'));
    }

    else {
      plantingChoice.forEach(el => el.classList.remove('_blure'));
      gardenChoice.forEach(el => el.classList.remove('_blure'));
      lawnChoice.forEach(el => el.classList.remove('_blure'));
    }
  }
}

);

gardenBtn.addEventListener('click', function () {
  let activeBtn = document.querySelectorAll('.service_block ._active');

  if (!gardenBtn.classList.contains('_active') && activeBtn.length !== 2) {
    gardenBtn.classList.add('_active');
    gardenChoice.forEach(el => el.classList.remove('_blure'));

    if (!lawnBtn.classList.contains('_active')) {
      lawnChoice.forEach(el => el.classList.add('_blure'));
    }

    if (!plantingBtn.classList.contains('_active')) {
      plantingChoice.forEach(el => el.classList.add('_blure'));
    }
  }

  else {
    gardenBtn.classList.remove('_active');

    if (lawnBtn.classList.contains('_active') || plantingBtn.classList.contains('_active')) {
      gardenChoice.forEach(el => el.classList.add('_blure'));
    }

    else {
      plantingChoice.forEach(el => el.classList.remove('_blure'));
      gardenChoice.forEach(el => el.classList.remove('_blure'));
      lawnChoice.forEach(el => el.classList.remove('_blure'));
    }
  }
}

);

plantingBtn.addEventListener('click', function () {
  let activeBtn = document.querySelectorAll('.service_block ._active');

  if (!plantingBtn.classList.contains('_active') && activeBtn.length !== 2) {
    plantingBtn.classList.add('_active');
    plantingChoice.forEach(el => el.classList.remove('_blure'));

    if (!gardenBtn.classList.contains('_active')) {
      gardenChoice.forEach(el => el.classList.add('_blure'));
    }

    if (!lawnBtn.classList.contains('_active')) {
      lawnChoice.forEach(el => el.classList.add('_blure'));
    }
  }

  else {
    plantingBtn.classList.remove('_active');

    if (gardenBtn.classList.contains('_active') || lawnBtn.classList.contains('_active')) {
      plantingChoice.forEach(el => el.classList.add('_blure'));
    }

    else {
      plantingChoice.forEach(el => el.classList.remove('_blure'));
      gardenChoice.forEach(el => el.classList.remove('_blure'));
      lawnChoice.forEach(el => el.classList.remove('_blure'));
    }
  }
}

);