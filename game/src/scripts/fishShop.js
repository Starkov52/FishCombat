
//Инициализация все активных обьектов 
const arrayFishShopWindow = document.querySelectorAll(".fishShop__window")
const backAndNextBtns = document.querySelector(".fishShop__inner")
const fishShopWindow = document.querySelector(".fishShop")
const acceptBtn = document.querySelector(".fishShop__accept")
let oldIndex = 0
let fish
let fishImg
//Функция отображения текущего окна в слайдере(fishShop)
function showWindow(index) {
    arrayFishShopWindow[index].style.display = "grid"
    arrayFishShopWindow[index].classList.add("fishShop__window--active")
    arrayFishShopWindow[oldIndex].style.display = "none"
    arrayFishShopWindow[oldIndex].classList.remove("fishShop__window--active")
oldIndex = index
}
//Обработчик событий на кнопка назад && вперед,который передает в функцию index showWindow(index)
backAndNextBtns.addEventListener("click", function(event) {
    if(event.target.classList.contains("fishShop__selecIcon1")) {
        let index = oldIndex
        if(index <= 0) {
            index = arrayFishShopWindow.length - 1
            showWindow(index)
        } else {
            index = index - 1
            showWindow(index)
            
        }
    }
    if(event.target.classList.contains("fishShop__selecIcon2")) {
        let index = oldIndex
        if(index >= arrayFishShopWindow.length - 1) {
            index = 0
            showWindow(index)
        } else {
            index = index + 1
            showWindow(index)
            console.log(oldIndex)
        }
    }
    if(event.target.classList.contains("fishShop__cancle")) {
        fishShopWindow.style.display = "none"
        arrayFishShopWindow[oldIndex].style.display = "none"
    arrayFishShopWindow[oldIndex].classList.remove()
    oldIndex = 0
    } else if(event.target.classList.contains("fishShop__accept")) {
    let btn = event.target.classList
    // Конструкция switch case который передает в addFish рыбу с определнными парaметрами в зависемости от того на какую рыбы кликнул пользователь(также передаются картинки для маленькой рыбы и ее размеры)
    switch (oldIndex) {
      case 0:
        fishImg = "/img/free-icon-fish-5511634.png";
        imgLeft = "/img/free-icon-fish-3829599 10.png";
        imgRight = "/img/free-icon-fish-3829599.png";
        if (userProxy.money >= 100) {
          fish = new Proxy(new targetFish(1, 2, false, 100, "Mackerel", 5000, fishImg, 64), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 1:
        fishImg = "/img/free-icon-fish-672654 (1) 2.png";
        imgLeft = "/img/free-icon-fish-811435 1.png";
        imgRight = "/img/free-icon-fish-811435.png";
        if (userProxy.money >= 5500) {
          fish = new Proxy(new targetFish(1, 5, false, 5500, "GoldFish", 6000, fishImg, 64), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 2:
        fishImg = "/img/free-icon-fish-2508143.png";
        imgLeft = "/img/free-icon-fish-2508141.png";
        imgRight = "/img/free-icon-fish-2508141 1.png";
        if (userProxy.money >= 15500) {
          fish = new Proxy(new targetFish(1, 15, false, 25500, "TropicalFish", 6900, fishImg, 64), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 3:
        fishImg = "/img/free-icon-puffer-fish-3937483.png";
        imgLeft = "/img/free-icon-puffer-fish-12244279.png";
        imgRight = "/img/free-icon-puffer-fish-12244279 1.png";
        if (userProxy.money >= 22550) {
          fish = new Proxy(new targetFish(1, 25, false, 55550, "PufferFish", 8500, fishImg, 64), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 4:
        fishImg = "/img/free-icon-clown-fish-4973884 (2).png";
        imgLeft = "/img/free-icon-clownfish-7668200 1.png";
        imgRight = "/img/free-icon-clownfish-7668200.png";
        if (userProxy.money >= 28990) {
          fish = new Proxy(new targetFish(1, 30, false, 78990, "clownFish", 9500, fishImg, 64), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 5:
        fishImg = "/img/free-icon-angler-4971977.png";
        imgLeft = "/img/free-icon-angler-4973687.png";
        imgRight = "/img/free-icon-angler-4973687 1.png";
        if (userProxy.money >= 35500) {
          fish = new Proxy(new targetFish(1, 45, false, 105500, "SeaDevil", 11000, fishImg, 128), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 6:
        fishImg = "/img/free-icon-dolphin-2028425.png";
        imgLeft = "/img/free-icon-dolphin-235444 1.png";
        imgRight = "/img/free-icon-dolphin-235444.png";
        if (userProxy.money >= 45500) {
          fish = new Proxy(new targetFish(1, 55, false, 145500, "Dolphin", 13000, fishImg, 128), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 7:
        fishImg = "/img/free-icon-shark-3065737.png";
        imgLeft = "/img/free-icon-shark-3127636 1.png";
        imgRight = "/img/free-icon-shark-3127636.png";
        if (userProxy.money >= 55500) {
          fish = new Proxy(new targetFish(1, 65, false, 195500, "Shark", 15000, fishImg, 128), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 8:
        fishImg = "/img/free-icon-capybara-235359.png";
        imgLeft = "/img/Group 50 (2).png";
        imgRight = "/img/Group 50 (3).png";
        if (userProxy.money >= 77777) {
          fish = new Proxy(new targetFish(1, 85, false, 228777, "Capybara", 17000, fishImg, 162), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
      case 9:
        fishImg = "/img/free-icon-whale-4971939.png";
        imgLeft = "/img/free-icon-sea-12913110 (1).png";
        imgRight = "/img/free-icon-sea-12913110 (1) 1.png";
        if (userProxy.money >= 100000) {
          fish = new Proxy(new targetFish(1, 100, false, 300000, "Whale", 35000, fishImg, 212), {
            set(target, property, value) {
              if (property === "lvl") {
                const message = `Уровень рыбы "${fish.name}" повышен до ${value}`;
                setNotification(message);
                target[property] = value;
                return true;
              } else {
                target[property] = value;
                return true;
              }
            }
          });
        } else {
          setNotification("Недостаточно средств для покупки этой рыбы.");
        }
        break;
    }
    
        userProxy.addFish(fish, btn, fishImg)
        
 
    }
})

