//реализация секции услуг
document.querySelector('.dropdown-button').addEventListener('click', function() {
  document.querySelector('.dropdown-list').classList.toggle('dropdown-list--visible');
  document.querySelector('.dropdown-button').classList.add('dropdown-button--active');
})

let officeItems = document.querySelectorAll('.contacts__office-item');

document.querySelectorAll('.dropdown-item').forEach(function(item,index) {
  item.addEventListener('click', function() {
   
    for (let officeItem of officeItems) {
      officeItem.classList.remove('office-item--visible');

    }
    officeItems[index].classList.add('office-item--visible');
    document.querySelector('.dropdown-button').innerText = this.innerText
  
    document.querySelector('.dropdown-button').focus();
    /* document.querySelector('.dropdown-input--hidden').value = this.dataset.value; */
    document.querySelector('.dropdown-list').classList.remove('dropdown-list--visible');
      document.querySelector('.dropdown-button').classList.add('dropdown-button--changeArrow');
    
  })
})