//реализация контактов по городам
//константа для кнопки
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownList = document.querySelector('.dropdown-list');
//контактные окна по городам, которые появляются при выборе города
let officeItems = document.querySelectorAll('.contacts__office-item');

//Что происходит при нажатии на кнопку
dropdownButton.addEventListener('click', function () {
  //открывается/закрывается список городов
  dropdownList.classList.toggle('dropdown-list--visible');
  //меняем направление стрелки и цвет кнопки
  dropdownButton.classList.toggle('dropdown-button--active');
  dropdownButton.classList.toggle('dropdown-button--topArrow');

}

) // что делает скрипт при нажатии на город

document.querySelectorAll('.dropdown-item').forEach(function (item, index) {
  item.addEventListener('click', function () {
    //кликаем по городу
    //если был открыт город, то закрываем его
    dropdownButton.classList.remove('dropdown-button--topArrow');

    for (let officeItem of officeItems) {
      officeItem.classList.remove('office-item--visible');
    }

    dropdownButton.style.backgroundColor = "#c1e698";
    dropdownButton.style.boxShadow = "none";
    dropdownButton.classList.add('dropdown-button--BottomArrow');

    //добавляем табличке с информацией видимость
    officeItems[index].classList.add('office-item--visible');

    //меняем текст кнопки на название выбранного города
    dropdownButton.innerText = this.innerText;
    //удаляем список городов
    document.querySelector('.dropdown-list').classList.remove('dropdown-list--visible');
  }

  )
}

)