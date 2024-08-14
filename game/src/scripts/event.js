// Инициализируем активные обьекты для ПОДАРКА
const present = document.querySelector(".present")
const presentImg = document.querySelector(".present__img")
const sunLight = document.querySelector(".egg")
function dropPresent() {
    present.style.display = "block"
    presentImg.src = "/img/free-icon-gift-1384686 (1).png"
    sunLight.classList.add("egg--active")
    for(let i = 0; i < 4; i++) {
    const boobl = document.createElement("img")
    boobl.style.zIndex = "-1"
    boobl.src = "/img/blop.png"
    boobl.style.width = "24px"
    boobl.style.height = "24px"
    boobl.style.position = "absolute"
    boobl.style.left = `25px`
    boobl.style.top = `15px`
    boobl.style.transform = `translateX(10px) translateY(${9 * i}px)`
    boobl.style.transition = "3s ease-out"
    
    present.appendChild(boobl)
    setTimeout(()=> {
    
    boobl.style.transform = `translateX(-1500px) translateY(${-500 * i}px)`
    
}, 5000)
boobl.addEventListener("transitionend", function(event) {
    boobl.remove()
   
})
    }
    
    for(let i = 0; i < 4; i++) {
        const boobl = document.createElement("img")
        boobl.style.zIndex = "-1"
        boobl.src = "/img/blop.png"
        boobl.style.width = "24px"
        boobl.style.height = "24px"
        boobl.style.position = "absolute"
        boobl.style.left = `0px`
        boobl.style.top = `0px`
        boobl.style.transform = `translateX(0px) translateY(${9  * i}px)`
        boobl.style.transition = "3s ease-out"
        
        present.appendChild(boobl)
        setTimeout(()=> {
            
            boobl.style.transform = `translateX(1500px) translateY(${-500 * i}px)`
            
            
        }, 5000)
        
        boobl.addEventListener("transitionend", function(event) {
            boobl.remove()
        })
    }
        
}
//Обработчик события повешенные на подарок который выдает деньги и вызывает функцию setNotification для отображения сообщения
present.addEventListener("click", function(event) {
    presentImg.style.position = "absolute"
    presentImg.style.width = "80px"
    presentImg.style.height = "80px"
    presentImg.style.left = `-8px`
    presentImg.style.top = `-15px`
    presentImg.src = "/img/free-icon-present-3640294.png"
    sunLight.classList.remove("egg--active")
    setNotification(`На ваш баланс зачислено ${5000 * userProxy.lvl} монет!`)
    userProxy.money += 5000 * userProxy.lvl
    setTimeout(() => {
        present.style.display = "none"
    },3000)
})
 setInterval(() => {
    sunLight.classList.add("egg--active")
    dropPresent()
 },3666000)
 

 
