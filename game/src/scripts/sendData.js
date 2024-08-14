//Обработчики на выход со страницы(beforeonload), в этот момен обьекты игрока превращаются в json строчки и отправляются в localStorage,a на обработичке load данные достаются,парсируются и заменяют прошлое значение свойств обьектов
import  startLesson  from "./study.js"
setInterval(()=> {
    
    const userJson = JSON.stringify({
        money: userProxy.money,
        exp: userProxy.exp,
        miniFishes: userProxy.miniFishes,
        lvl: userProxy.lvl,
        blockedFish: Array.from(userProxy.blockedFish), 
        unlockedFish: Array.from(userProxy.unlockedFish),
        study: userProxy.study
    });
    const fishJson = JSON.stringify(fish)
    const minFishJson = JSON.stringify(minFish)
    localStorage.setItem("user", userJson);
    localStorage.setItem("fish", fishJson)
    localStorage.setItem("minFish", minFishJson)
    
},10000)
window.addEventListener("load", function(event) {
    let lastImage = ""
    const data = localStorage.getItem("user");
    const fishData = localStorage.getItem("fish")
    const readyFish = JSON.parse(fishData)
    const minFishData = localStorage.getItem("minFish")
    const readyMinFish = JSON.parse(minFishData)
    minFish.unlocked = readyMinFish.unlocked
    minFish = new miniFish(readyMinFish.unlocked,readyMinFish.secondMoney, readyMinFish.price, readyMinFish.imgLeft, readyMinFish.imgRight)
    fish = new targetFish(readyFish.lvl,readyFish.moneySecond , readyFish.unlocked, readyFish.price, readyFish.name, readyFish.lvlUpPrice, readyFish.fishImg, readyFish.minFishSize)
    
        const ready = JSON.parse(data);
        userProxy.money = ready.money;
        userProxy.exp = ready.exp;
        userProxy.miniFishes = ready.miniFishes;
        userProxy.lvl = ready.lvl;
        userProxy.blockedFish = new Map(ready.blockedFish); 
        userProxy.unlockedFish = new Set(ready.unlockedFish); 
        userProxy.moneyHour = ready.moneyHour;
        userProxy.study = ready.study;
        coinIcon.src = fish.fishImg
          
    
    for(let i = 0; i < userProxy.miniFishes; i++) {
        addMiniFishes()
    }
    const fishHandler = {
    set(target, property, value) {
        if(property === "lvl") {
          const message = `Уровень рыбы "${fish.name}" повышен до ${value}`
          setNotification(message)
       
            target[property] = value
            return true
        } else {
            target[property] = value
            return true
        }
      }
    }

    fish = new Proxy(fish, fishHandler)
   //Определение цвета монеты исходя из УРОВНЯ игрока
   
   if(userProxy.lvl >= 3 && userProxy.lvl < 6) {
    coin.style.background = silver 
    coinCircle.style.background = silverCircle
} else if(userProxy.lvl > 5) {
    coin.style.background = gold
    coinCircle.style.background = goldCircle
}
headerLvl.textContent = userProxy.lvl 
})
setTimeout(() => {
    if(userProxy.study === 0) {
        startLesson()
    } 
},5000)

