//Иницализация всех активных обьектов
const coinValue = document.querySelector(".coinArea__value")
let coin = document.querySelector('.coinArea__coin')
let coinCircle = document.querySelector(".coinArea__circle")
const silver = "linear-gradient(42deg, rgba(224,224,224,1) 0%, rgba(209,208,198,1) 13%, rgba(224,224,224,1) 23%, rgba(247,243,243,1) 35%, rgba(209,208,198,1) 50%, rgba(247,243,243,1) 65%, rgba(224,224,224,1) 80%, rgba(209,208,198,1) 88%, rgba(224,224,224,1) 100%)"
const silverCircle = "linear-gradient(42deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(42deg, rgba(224,224,224,1) 0%, rgba(209,208,198,1) 13%, rgba(224,224,224,1) 23%, rgba(247,243,243,1) 35%, rgba(209,208,198,1) 50%, rgba(247,243,243,1) 65%, rgba(224,224,224,1) 80%, rgba(209,208,198,1) 88%, rgba(224,224,224,1) 100%)"
const gold = "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
const goldCircle = "radial-gradient(ellipse farthest-corner at right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
//Получение метриков для анимации клика монетки
const metricsCoin = coin.getBoundingClientRect()
const centerWidthCoin = metricsCoin.width / 2
const centerHeightCoin = metricsCoin.height / 2
let coordMouseX = 0
let coordMouseY = 0

// Коэффициент сдвига монеты а также функционал добавление +1 к месту клика
const rate = 5
// Обработчик события повешенный на монетке который определяет сдвиг при клике а также добавляет EXP && money
coin.addEventListener("click", function(event) {
    userProxy.money += userProxy.lvl
    userProxy.exp += 5
    coordMouseX = event.pageX - metricsCoin.left - centerWidthCoin
    coordMouseY = (event.pageY - metricsCoin.top) - centerHeightCoin
    const score = document.createElement("div")
           score.classList.add("plusOne")
           if(userProxy.lvl >= 3 && userProxy.lvl < 5) {
            score.style.color = "#c0c0c0"
           } else if(userProxy.lvl > 5) {
            score.style.color = "#ffd700"
           }
           score.textContent = `+${userProxy.lvl}`
           coin.parentElement.appendChild(score)
           score.style.left = `${(event.clientX - metricsCoin.left +  (main.offsetWidth / 2) - 80) }px`
           score.style.top = `${(event.clientY - metricsCoin.top) + (main.offsetHeight / 2) - 80}px`
    coin.addEventListener("mouseup", function(event) {
            coin.style.transform = `rotateX(${coordMouseX / rate}deg) rotateY(${coordMouseY / rate}deg)`
            setTimeout(() => {
           
           coin.style.transform = "rotateX(0deg) rotateY(0deg)"
           
        },100)
        setTimeout(() => {
            score.remove()
        },3000)

        coinValue.textContent = userProxy.money
    })

})


