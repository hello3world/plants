let btnServices = document.querySelectorAll('.service__btn');
let svItemsHeader = document.querySelectorAll('.sv-item__header');
let svItems = document.querySelectorAll('.sv-item');
/* btnServices.forEach(btnService => { */
/* btnServices[2].addEventListener('click', () => {
  svItems.forEach((svItem, index) => {
    if (svItemHeader.textContent == 'Planting') {
      svItems[index].classList.toggle('blur');
    }
  })
}) */;
/* }) */
let counter = 0;
btnServices.forEach((btnService, index) => {
  btnService.addEventListener('click', () => {
    svItemsHeader.forEach((svItemHeader, index) => {
      if (svItemHeader.textContent !== 'Garden care' && btnService.textContent !== 'Gardens') {
        svItems[index].classList.toggle('blur');
        counter++;
      }
      if (svItemHeader.textContent !== 'Planting' && btnService.textContent !== 'Planting') {
        svItems[index].classList.toggle('blur');
        counter++;
      }
      if (svItemHeader.textContent !== 'Lawn care' && btnService.textContent !== 'Lawn') {
        svItems[index].classList.toggle('blur');
        counter++;
      }
    })
  });
})


/* });
}); */

/* console.log(btnServices[0]) */