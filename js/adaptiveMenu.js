// Реализация адаптивного меню
const nav=document.querySelector('.nav');
const navList=document.querySelector('.nav__list');
const navLink=document.querySelectorAll('.nav__link');
const navBtn=document.querySelector('#nav-btn');
const navBtnImg=document.querySelector('#nav-btn-img');
const menuMobile=document.querySelector('.menu__mobile');

navBtn.onclick=()=> {
  if (nav.classList.toggle("open")) {
    navBtnImg.src="./resourсes/img/img-380px/header/burger-close.svg"
  }

  else {
    navBtnImg.src="./resourсes/img/img-380px/header/burger.svg"
  }
}

for (let item of navLink) {
  item.onclick = () => {
    nav.classList.remove("open");
    navBtnImg.src="./resourсes/img/img-380px/header/burger.svg"
  }
}

navList.onclick = () => {
  nav.classList.remove("open");
    navBtnImg.src="./resourсes/img/img-380px/header/burger.svg"
}