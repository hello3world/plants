
// Реализация аккордиона для секции Price
let pricesItems = document.querySelectorAll(".prices-items__item");

pricesItems.forEach((pricesItem, index) => {
  pricesItem.addEventListener("click", () => {
    for (let pricesItem of pricesItems) {
      if (pricesItem === pricesItems[index]) {
        pricesItems[index].classList.toggle("price--active");
      } else {
        pricesItem.classList.remove("price--active");
      }
    }
  })
}
)