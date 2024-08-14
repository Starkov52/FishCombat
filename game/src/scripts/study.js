//Функция реадизованная при помощи функции generator активирует окно обучение если пользователь зашел впервые в игру,при нажатии на кнопку "Начать" окно больше не появляется благодаря тому что в localStorage сохраняется обьект со совйство study: 1
function startLesson() {
const studyWindowsArray = document.querySelectorAll(".window")
const studyBtn = document.querySelectorAll(".window__btn")
const profit = document.querySelector(".header__profit")
function stepOne() {
    studyWindowsArray[0].style.display = "flex"
}
stepOne()
function stepTwo() {
    studyWindowsArray[0].style.display = "none"
    studyWindowsArray[1].style.display = "flex"
    profit.style.filter = "blur(10px)"
    footer.style.filter = "blur(10px)"
    studyWindowsArray[1].style.filter = "blur(0px)"
    console.log(1)
}
function stepThree() {
    profit.style.filter = "blur(0px)"
    header.style.filter = "blur(10px)"
    footer.style.filter = "blur(0px)"
    studyWindowsArray[1].style.filter = "blur(0px)"
    studyWindowsArray[1].style.display = "none"
    studyWindowsArray[2].style.display = "flex"
    console.log(2)
}

//Функция генератор для последовательного прохождения обучения
function* studyGenerator() {
    yield stepTwo()
    yield stepThree()
    yield function startGame() {
        studyWindowsArray[2].style.display = "none"
        header.style.filter = "blur(0px)"
        userProxy.study = 1
    }
}
const studyFunction = studyGenerator()
studyBtn.forEach((btn) => {
btn.addEventListener("click", function(event) {
  let nextStep = studyFunction.next().value
  nextStep()
  
})
})


}

export default  startLesson 


