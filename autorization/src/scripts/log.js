// Состояние регистрации
// Данные
const data = {
  nick: null,
  password: null,
  registration: false,
  study: 0
}
let test = false
//
//Получние окон валидации данных в константы
const regWindow = document.querySelector(".rigestration") 
const autorizationWindow = document.querySelector(".form")
// Создание обьектов из HTML документа для АВТОРИЗАЦИИ
const nickNameFieldA = document.querySelector(".form__nickName")
const passwordFieldA = document.querySelector(".form__password")
const inputBtnA = document.querySelector(".form__btn")
const linkJoin = document.querySelector(".form__accept")
const regLink = document.querySelector(".form__registration")
 // Создание обьектов из HTML документа для РЕГИСТРАЦИИ
const nickNameFieldR = document.querySelector(".rigestration__nickName")
const passwordFieldR = document.querySelector(".rigestration__password")
const inputBtnR = document.querySelector(".rigestration__btn")
const answer = document.querySelector(".rigestration__answer")
const nextLink = document.querySelector(".rigestration__accept")
// Подсказки при наведение на nickNameWindow а таккже его проверка
nickNameFieldR.addEventListener("input", function(event) {
    const regExp = /^[А-Я][а-я]*_[А-Я][а-я]*$/
    let value = event.target.value
    if(!regExp.test(value))  {
    answer.innerHTML = `<li class="answer__item">Ваш никнейм должен содержать русские буквы и придерживаться формата: "Имя_Фамилия".</li>`
    answer.style.display = "block" 
    nickNameFieldR.style.border = "2px solid red"
    test = false
    } else {
        nickNameFieldR.style.border = "2px solid green"
        answer.style.display = "none" 
        data.nick = value
        test = true
    }
})

// Подскази при навидении на пароль и также его проверка
passwordFieldR.addEventListener("input", function(event) {
let valuee = event.target.value
const regExp = /\d{8,16}\w{3}/i
console.log(regExp.test(valuee))
if(!regExp.test(valuee)) {
 answer.innerHTML = `<li class="answer__item">Ваш пароль должен содержать от 8-16 цифр, а также 3 латинские бувквы</li>`
 answer.style.display = "block"
 test = false
 passwordFieldR.style.border = "2px solid red"
} else {
    passwordFieldR.style.border = "2px solid green"
     answer.style.display = "none"
     data.password = valuee
 test = true
}
})
//Отправка данных на сервер
inputBtnR.addEventListener("click", function(event) {
    if(test) {
    data.registration = true
    const stringData = JSON.stringify(data)
    localStorage.setItem("0", stringData)
    regWindow.style.display = "none"
    autorizationWindow.style.display = "block"
    }
})
// АВТОРИЗАЦИЯ
window.addEventListener("load", function(event) {
    const DATA_JSON = localStorage.getItem("0")
    const readyData = JSON.parse(DATA_JSON)
   let join = 0
nickNameFieldA.addEventListener("input", function(event) {
   
   let value = event.target.value
   if(value === readyData.nick) {
  join += 1
   }
})

// Подскази при навидении на пароль и также его проверка
passwordFieldA.addEventListener("input", function(event) {
    let value = event.target.value
   if(value === readyData.password) {
  join += 1
   }
})
inputBtnA.addEventListener("click", function(event) {
    if(join >= 2) {
        event.preventDefault()
        linkJoin.setAttribute("href", "https://fishcombatgamee.web.app")
        linkJoin.click()

    } else {
        passwordFieldA.style.border = "2px solid red"
        nickNameFieldA.style.border = "2px solid red"
    }
})
}) 

// Пользавтель нажал на гиперссылку "Зарегистрироваться"
regLink.addEventListener("click",function(event) {
    event.preventDefault()
    autorizationWindow.style.display = "none"
    regWindow.style.display = "block"
}) 
inputBtnA.addEventListener("click", function(event) {
    event.preventDefault()
})


