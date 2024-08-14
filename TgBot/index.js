const telegramApi = require("node-telegram-bot-api")

const tocen = "7255585739:AAHj2Tl5EOrDF7dQHVdsyxXBH1pPp_gMwvg"
const bot = new telegramApi(tocen, {polling: true})

const buttonGameMobile = {
    reply_markup : JSON.stringify({
        inline_keyboard: [
        [{text: "Начать игру!", url:"https://fishcombatauthorization.web.app" }]
        ]
    })
}
const buttonGamePc = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Начать игру!", url: "https://fishcombatauthorization.web.app"}]
        ]
    })
}
const start = () => {
    bot.setMyCommands([
        {command: "/info" , description: "Информация о проекте"},
        {command: "/start" , description: "Ознакомление"},
        {command: "/game" , description: "Начать игру на мобилке"},
        {command: "/gamepc" , description: "Начать игру на ПК"},
        {command: "/sendscreen" , description: "Скриншоты из игры"},
    ])
   
    bot.on("message", async event => {
        const chatID = event.chat.id
        const text = event.text
        console.log(event)
        if(text === "/start" ) {
            await bot.sendSticker(chatID, "https://cdn.tlgrm.ru/stickers/a73/ec7/a73ec753-8718-438e-9fcb-a28ae038ed1b/96/7.webp")
            await bot.sendMessage(chatID, `Привет,${event.chat.first_name}! Игра доступна как на мобилке так и на ПК. Все доступные команды бота ты можешь узнать написав "/" в текстовое поле`)
        } else if(text === "/info") {
            await bot.sendMessage(chatID, `Проект реализован в учебных целях`)
        } else if(text === "/game") {
            await bot.sendMessage(chatID, `Начни прямо сейчас!`, buttonGameMobile)
        }
        else if(text === "/gamepc") {
            await bot.sendMessage(chatID, "Начни играть!", buttonGamePc)
        }
        else if(text === "/sendscreen") {
            bot.sendMessage(chatID, "Mobile версия")
            bot.sendPhoto(chatID, "https://i.postimg.cc/PxNDfq33/photo-2024-08-02-12-26-41.jpg")
            bot.sendMessage(chatID, "PC версия")
            bot.sendPhoto(chatID, "https://i.postimg.cc/xC7zXSB0/photo-2024-08-02-12-35-08.jpg")
        } else {
            await bot.sendMessage(chatID, `Я не понимаю что такое "${text}"!`)
        }
    })
    bot.on("callback_query", event => {
        console.log(event)
    })
}
start()