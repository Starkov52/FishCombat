// Взаимодействие пользвателя со всем функционалом футера
//Иницализация окон и кнопок
const footer = document.querySelector(".footer")
const addFishesWindow = document.querySelector(".addFish")
const upgradeFishWindow = document.querySelector(".upgradeWindow")
const headerLvl = document.querySelector(".header__value")
const counValueInHour = document.querySelector(".wrapper__value")
const lvlFishValue = document.querySelector(".upgradeWindow__value")
const lvlFishPrice = document.querySelector(".upgradeWindow__price")
const coinIcon = document.querySelector(".coinArea__icon-fish")
const lvlUpIconFish = document.querySelector(".upgradeWindow__fishIcon")
const addMiniFishPrice = document.querySelectorAll(".addFish__price")
const main = document.querySelector(".main")
const parentContainer = document.querySelector(".addFish__list")
footer.addEventListener("click", function(event) {
    if(event.target.classList.contains("footer__shopUpBtn") || event.target.classList.contains("footer__shopUpBtn-icon") ) {
        fishShopWindow.style.display = "grid"
        arrayFishShopWindow[0].style.display = "grid"
        arrayFishShopWindow[0].classList.add("fishShop__window--active")
        addFishesWindow.style.display = "none"
        upgradeFishWindow.style.display = "none"
    } else if(event.target.classList.contains("footer__addFishBtn") || event.target.classList.contains("footer__addFishBtn-icon2") || event.target.classList.contains("footer__addFishBtn-icon")) {
        if(fish) {
    addFishesWindow.style.display = "block"
    upgradeFishWindow.style.display = "none"
    fishShopWindow.style.display = "none"
    for (let i = 0; i < 6 - userProxy.miniFishes; i++) {
  
        const listItem = document.createElement("li");
        listItem.classList.add("addFish__item")
    
        const fishIcon = document.createElement("img");
        fishIcon.src = "/img/free-icon-fish-3829599 8.png";
        fishIcon.className = "addFish__icon";
        listItem.appendChild(fishIcon);
    
        const fishText = document.createElement("p");
        fishText.className = "addFish__text";
        fishText.textContent = "Купить рыбу";
        listItem.appendChild(fishText);
    
        const fishPrice = document.createElement("span");
        fishPrice.className = "addFish__price";
        listItem.appendChild(fishPrice);
        
        const addButton = document.createElement("img");
        addButton.src = "/img/add (1) 1.png";
        addButton.className = "addFish__add";
        listItem.appendChild(addButton);
        fishPrice.textContent = minFish.price
        parentContainer.appendChild(listItem);
        
    }
}
    } else if(event.target.classList.contains("footer__lvlUpBtn") || event.target.classList.contains("footer__lvlUpBtn-icon") || event.target.classList.contains("footer__lvlUpBtn-icon2") ){
    lvlFishValue.textContent = fish.lvl
    lvlFishPrice.textContent = fish.lvlUpPrice
    lvlUpIconFish.src = fish.fishImg
    upgradeFishWindow.style.display = "grid"
    addFishesWindow.style.display = "none"
    fishShopWindow.style.display = "none"

    }
})
//Закрытие окна добавление маленьких рыбок 
addFishesWindow.addEventListener("click", function(event) {
    const closeBtn = event.target.closest(".addFish__selectBtn");

    if (closeBtn) {
        const list = document.querySelectorAll(".addFish__item");
        
        if (userProxy.miniFishes <= 6) {
            // Очистка контейнера, который содержит все элементы
            parentContainer.innerHTML = '';

            // Скрываем окно добавления рыб
            addFishesWindow.style.display = "none";
        } else {
            addFishesWindow.style.display = "none";
        }
    }
});


// Закрытие окна улучшение текущей рыбы
upgradeFishWindow.addEventListener("click", function(event) {
    const closeBtn = event.target.closest(".upgradeWindow__btns-icon1")
    if(closeBtn) {
        upgradeFishWindow.style.display = "none"
    } else if(event.target.classList.contains("upgradeWindow__btns-icon2")) {
        fish.lvlUpFish()
    }
})

//Получение окна инфо 
const infoWindow = document.querySelector(".info")
//Открытие информационного меню
const header = document.querySelector(".header")
header.addEventListener("click", function(event) {
    if(event.target.classList.contains("wrapper__info-icon")) {
     infoWindow.style.display = "grid"
     infoWindow.addEventListener("click", function(event) {
        if(event.target.classList.contains("info__close")) {
            infoWindow.style.display = "none"
        }
     })
    }
})



//ПРОФИЛЬ И ВЕСЬ ФУНКЦИОНАЛ ПРОЕКТА!

//Уровни
const lvls = [
    "2500",
    "10000",
    "20000",
    "40000",
    "60000",
    "100000",
    "200000",
    "300000"
]
//Все заблокированные рыбы
const fishArray = [[{"Mackerel": "/img/free-icon-fish-5511634.png"}],[{"GoldFish": "/img/free-icon-fish-672654 (1) 2.png"}],[{"TropicalFish": "/img/free-icon-fish-2508143.png"}],[{"PufferFish": "/img/free-icon-puffer-fish-3937483.png"}],[{"clownFish": "/img/free-icon-clown-fish-4973884 (2).png"}],[{"SeaDevil": "/img/free-icon-angler-4973687.png"}],[{"Dolphin": "/img/free-icon-dolphin-2028425.png"}],[{"Shark": "/img/free-icon-shark-3065737.png"}],[{"Capybara": "/img/free-icon-capybara-235359.png"}],[{"Whale": "/img/free-icon-whale-4971939.png"}]]
class Player {
    constructor(money, exp, lvl, unlockedFish = [], blockedFish = [], miniFishes = 0, moneyHour = 0, study = 0) {
        this.miniFishes = miniFishes,
        this.lvl = lvl,
        this.money = money,
        this.exp = exp,
        this.unlockedFish = new Set(unlockedFish),
        this.blockedFish = new Map(blockedFish),
        this.moneyHour = moneyHour,
        this.study = study
    }
    // Метод экземпляра класса user для добавления денег
    setMoney(money) {
        this.money = money
    }
    // Метод экземпляра класса user для добавления EXP
    setExp(exp) {
        this.exp = exp
    }
    // Метод экземпляра класса user для добавления рыбы а также добавление ее в коллекцию Set(unlockedFish) и удаление с коллекции Map(blockedFish)
    addFish(fish, btn, fishImg) {
        if(userProxy.miniFishes === 6 || userProxy.lvl === 1) {
        if(this.money >= fish.price) {
            for(const [key, value] of this.blockedFish.entries()) {
             const fishId = Object.keys(value[0])[0]
             if(fish.name === fishId) {
             this.miniFishes = 0
              minFish.imgLeft = imgLeft
              minFish.imgRight = imgRight
              this.money -= fish.price
              this.unlockedFish.add(value[0])
              this.blockedFish.delete(key)
              const message = `Вы приобрели рыбу:"${fish.name}"`
              setNotification(message)
              btn.add("fishShop__accept--active")
              fish.unlocked = true
              coinIcon.src = fish.fishImg
              removeMiniFishes()
              break;
               }
               
            }
            
        } else {
            setNotification(`У вас недостаточно средств: "${fish.price - userProxy.money}p"`)
        }
    } else {
        setNotification("Для покупки новой рыбы вы должны иметь 6 мини рыбок!")
    }
        }
// Метод экземпляра класса user для перехода на следующий уровень,добавление подарка(droppresent)
nextLvl(exp, lvl) {
    while(exp >= lvls[user.lvl - 1]) {
        this.exp = exp - Number(lvls[user.lvl - 1])
        this.lvl = lvl + 1
        headerLvl.textContent = userProxy.lvl 
        dropPresent()
        if(this.lvl === 3) {
        coin.style.background = silver
        this.lvl = lvl + 1
        coinCircle.style.background = silverCircle
        console.log(Number(lvls[user.lvl]), this.exp, user.lvl)
        headerLvl.textContent= userProxy.lvl 
        dropPresent()
        break
        } else if(this.lvl === 6) {
            coin.style.background = gold
            this.lvl = lvl + 1
            coinCircle.style.background = goldCircle
            console.log(Number(lvls[user.lvl]), this.exp, user.lvl)
            headerLvl.value = userProxy.lvl 
            break
        }
}
}
// Метод экземпляра класса user для добавления маленькой рыбки на задний фон
addMiniFish(target, miniFishBtn) {
    if(userProxy.money >= minFish.price && userProxy.miniFishes <= 6) {
    userProxy.money -= minFish.price
    this.miniFishes += 1
    minFish.price += 5000
    minFish.secondMoney += 10
    addMiniFishes()
    target.unlockedd = true
    if(miniFishBtn)

    target.moneyMiniFish(minFish.secondMoney)
    
    } else {
        setNotification(`У вас недостаточно средств:"${minFish.price - userProxy.money}p"`)
    }
}
// Метод экземпляра класса user который отвечает за вычисление прибыли в час исходя из свойство fish && miniFish
moneyInHour(fish) {
    const fishTargetHour = fish.moneySecond * 720
    const minFishTargetHour = (userProxy.miniFishes * minFish.secondMoney) * 720
    this.moneyHour = fishTargetHour + minFishTargetHour
    
}
}
//Класс текущей рыбы 
class targetFish {
    constructor(lvl = 1, moneySecond, unlocked, price, name, lvlUpPrice = 5000, fishImg, minFishSize) {
        this.name = name,
        this.lvl = lvl,
        this.moneySecond = moneySecond
        this.unlocked = unlocked
        this.price = price
        this.lvlUpPrice = lvlUpPrice
        this.fishImg = fishImg
        this.minFishSize = minFishSize
    }
    // Метод для экземпляра класса для повышении уровня рыбы а также ее свойств
    lvlUpFish() {
        if(this.lvl <= 4 && userProxy.money >= this.lvlUpPrice) {
            this.moneySecond += 50
            userProxy.money -= this.lvlUpPrice
            this.lvlUpPrice += 5000
            lvlFishValue.textContent = this.lvl
            lvlFishPrice.textContent = this.lvlUpPrice
            this.lvl += 1
        if(fish.lvl === 5) {
            lvlFishPrice.textContent = "MAX"
        }
        } else {
            setNotification(`У вас недостаточно средств: "${fish.lvlUpPrice - userProxy.money}"`)
        }
    }
    // Ну.. тут все понятно
    unlockedFish(unlocked) {
        this.unlocked = unlocked
    }
   

}
// Класс мини рыбы
class miniFish {
    constructor(unlocked = false, secondMoney, price, imgLeft = "", imgRight = "") {
        this.imgLeft = imgLeft,
        this.imgRight = imgRight,
        this.price = price,
        this.unlocked = unlocked,
        this.secondMoney = secondMoney
    }
    // Ну.. тут все понятно
    unlockedMiniFish(unlocked) {
        this.unlocked = unlocked
    }
    //Метод экземпляра класса для передачи денег игроку
    moneyMiniFish(secondMoney) {
        if(userProxy.miniFishes >= 1) {
       
        userProxy.money += secondMoney * userProxy.miniFishes
       
    }
    }
}
//Создание экземпляра класса Player
const user = new Player(0, 0, 1, [], [])
//Создание экземпляра класса miniFish
let minFish = new miniFish(true, 0, 5000)



// Добавление все заблокированных рыб в Map в свойство blockedFish экземпляра класса user 
function setAllBlockedFish() {
    for(let i = 0; i < fishArray.length; i++)
    user.blockedFish.set(i, fishArray[i])
}

setAllBlockedFish()



//Инициализация прогресс бара
const progressBar = document.querySelector(".header__progressBar")
const progressBarFill = document.querySelector(".header__filling")
//Функция для заполнение прогресс бара в зависимости от exp 
function fillProgressBar(expToUp, expUser) {
    const procent = (expUser / expToUp) * 100
    progressBarFill.style.width = procent
    const progressBarWidth = progressBar.getBoundingClientRect().width
    const progressBarFillWidth = progressBarFill.getBoundingClientRect().width
    progressBarFill.style.width = `${procent}%`
    if(progressBarFillWidth >= progressBarWidth) {
        progressBarFill.style.width = "0"
    }

}




// Отслеживание действий игрока(lvl,miniFish)
const userProxy = new Proxy(user,{
    set(target,property, value) {
        switch(property) {
     case "lvl":
        const message = `Ваш ${property} повышен до ${value}`
        setNotification(message)
       target[property] = value
       return true
       break;
     case "miniFishes": 
     const messag = `Вы приобрели рыбку`
     setNotification(messag)
     target[property] = value
     return true
     break;
    default:
       target[property] = value
       return true
       break;
        }
}
})


// Добавление рыбки
const minFishArray = []
 addFishesWindow.addEventListener("click", function(event) {
    if(event.target.classList.contains("addFish__add")) {
        if(userProxy.money >= minFish.price) {
        const windowTargetAddFish = event.target.closest(".addFish__item")
        windowTargetAddFish.classList.add("addFish__item--active")

        userProxy.addMiniFish(minFish)
        } else {
            setNotification(`У вас недостаточно средств: "${minFish.price - userProxy.money}"`)
        }
    }
 })
// Визуализация вычислений скрытых от игрока(до этого момента), выполненная с помощью интервалов
setInterval(() => {
    userProxy.nextLvl(userProxy.exp, userProxy.lvl);
  }, 10000);
  
  
  setInterval(() => {
    userProxy.money += fish.moneySecond;
  }, 5000); 
  

  

  setInterval(() => {
    coinValue.textContent = userProxy.money;
  }, 1000); 
  
 
  setInterval(() => {
    if(userProxy.lvl < 5) {
    headerLvl.textContent = userProxy.lvl;
    addMiniFishPrice.forEach((fish) => {
    fish.textContent = minFish.price
})
  }
  }, 5000);
  
 
  setInterval(() => {
    minFish.moneyMiniFish(minFish.secondMoney);
  }, 5000); 
  

  setInterval(() => {
    counValueInHour.textContent = userProxy.moneyHour;
  }, 20000); 
  
  
  setInterval(() => {
    fillProgressBar(lvls[userProxy.lvl - 1], userProxy.exp);
  }, 4000); 
  
 
  setInterval(() => {
    userProxy.moneyInHour(fish);
    console.log(userProxy); 
  }, 5000); 
  setTimeout(() => {
lvlFishValue.textContent = fish.lvl
lvlFishPrice.textContent = fish.lvlUpPrice
  },5000)
  
  //Фунцкия для отображения рыбок на фоне и логика их движения
  const coinArea = document.querySelector(".coinArea")
  const coinAreaMetric = coinArea.getBoundingClientRect()
  
  function addMiniFishes() {
    
   
    const fishm = document.createElement("div")
    fishm.classList.add("fish")
    fishm.style.width = `${fish.minFishSize}px`
    fishm.style.height = `${fish.minFishSize}px`
    fishm.style.background = `url("${minFish.imgLeft}") no-repeat center / cover`
    fishm.style.zIndex = "0"
    fishm.style.transition = " transform 15s linear, left 15s linear"
    fishm.style.position = "absolute"
    fishm.style.left = `${Math.floor((Math.random() * (main.offsetWidth - 10 + 1) + 10))}px`
    fishm.style.top = `${Math.floor((Math.random() * (400 - (-200) + 1) + -200))}px`
    coinArea.appendChild(fishm)
    setInterval(()=> {
        const fishMetric = fishm.getBoundingClientRect()
        fishm.style.left = "-100px"
        if(fishMetric.left <= 0) {
            fishm.style.background = `url("${minFish.imgRight}") no-repeat center / cover`
               fishm.style.transform = `translateX(${Math.floor((Math.random() * (main.offsetWidth - (main.offsetWidth - 100) + 1) + main.offsetWidth))}px) translateY(${Math.floor((Math.random() * (200 - 10 + 1) + 10))}px)`
        } else if(fishMetric.left >= main.offsetWidth - 200) {
            fishm.style.background = `url("${minFish.imgLeft}") no-repeat center / cover`
            fishm.style.transform = `translateX(${Math.floor((Math.random() * (-150 - -1 + 1) + -1))}px) translateY(${Math.floor((Math.random() * (200 - 10 + 1) + 10))}px)`
        }

    },500)
    setInterval(()=> {
        const coinM = document.createElement("p")
        coinM.textContent = `+${minFish.secondMoney / userProxy.miniFishes}`
        coinM.classList.add("plusOne")
        coinM.style.zIndex = "2222"
        coinM.style.position = "absolute"
        coinM.style.fontSize = "12px"
   
        fishm.appendChild(coinM)
        setInterval(()=> {
            coinM.remove()
        },5000)
    }, 5000)
  }
  //Функция удаление рыбок при покупки новой targetFish
  function removeMiniFishes() {
    const fish = document.querySelectorAll(".fish")
    let i = 0
    while(i < fish.length) {
    fish[i].classList.remove(".fish")
    fish[i].remove()
    i++
    }
  }
  //Система оповщение игрока об его действиях 
  const notification = document.querySelector(".tranzaktionInfo__list")
  function setNotification(message) {
    notification.style.display = "block"
    notification.insertAdjacentHTML(
        "afterbegin",
        `<li class="tranzaktionInfo__item"><img src="/img/free-icon-email-notification-10962308.png" /><p class="tranzaktionInfo__text">${message}</p></li>`
    )
    const newNotification = document.querySelector(".tranzaktionInfo__item")
    setTimeout(() => {
        newNotification.remove()
   
    }, 4010)
}




