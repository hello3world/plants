
// Реализация аккордиона для секции Price
let pricesItems=document.querySelectorAll(".prices-items__item");
let pricesItemsHeads=document.querySelectorAll(".prices-items__header");

pricesItemsHeads.forEach((pricesItemsHead, index) => {
  pricesItemsHead.addEventListener("click", () => {
    for (let pricesItem of pricesItems) {
      if (pricesItem == pricesItems[index]) {
        pricesItems[index].classList.toggle("price--active"); 
      } else {
       pricesItem.classList.remove("price--active"); 
      }
          
    }
    
  }
  )
  }
)