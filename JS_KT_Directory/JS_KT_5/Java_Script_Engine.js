let inputLabel = document.getElementById('nameDlyaCarty')
let inputSystem =  document.getElementById('systemDlyaCarty')
let inputBank = document.getElementById('bankDlyaCarty')
let inputYear =  document.getElementById('YearDlyaCarty')
let inputNomerCarty = document.getElementById('NomerCartyDlyaCarty')
//инпуты юзера 

let drawClient = document.getElementById('prewieNameDlyaCarty')
let drawBank = document.getElementById('prewieBankDlyaCarty')
let drawNumbers = document.getElementById('prewieNumbersDlyaCarty')
let drawSystem = document.getElementById('prewieSystemyDlyaCarty')
let drawIstekaet = document.getElementById('prewieIstekaetDlyaCarty')
//рисую миниатюру карты

inputLabel.addEventListener('input', (event) => {
    let Blank = event.target.value
    
    if (Blank.trim() === '') {
        drawClient.textContent = 'Здесь будет Ваше Имя'
    } else {
        drawClient.textContent = Blank.toUpperCase()
    }
})

inputSystem.addEventListener('input', (event) => {
    let Blank = event.target.value
    
    if (Blank.trim() === '') {
        drawSystem.textContent = 'Здесь будет Ваша платёжная система'
    } else {
        drawSystem.textContent = Blank.toUpperCase()
    }
})

inputBank.addEventListener('input', (event) => {
    let Blank = event.target.value
    
    if (Blank.trim() === '') {
        drawBank.textContent = 'Здесь будет Ваш выбранный Банк'
    } else {
        drawBank.textContent = Blank.toUpperCase()
    }
})

inputYear.addEventListener('input', (event) => {
    let Blank = event.target.value
    
    if (Blank.trim() === '') {
        drawIstekaet.textContent = 'Здесь будет срок когда Ваша карта обратится в прах'
    } else {
        drawIstekaet.textContent = Blank.toUpperCase()
    }
})


inputNomerCarty.addEventListener('input', (event) => {
    let Blank = event.target.value
    
    if (Blank.trim() === '') {
        drawNumbers.textContent = 'Здесь будет Ваш номер карты'
    } else {
        drawNumbers.textContent = Blank.toUpperCase()
    }
})


let saveBtn = document.getElementById('saveBtn')
let tableTelo = document.getElementById('tableTelo')

saveBtn.addEventListener('click', () => {
    let newCard = {
        name: inputLabel.value,
        system: inputSystem.value,
        bank: inputBank.value,
        year: inputYear.value,
        number: inputNomerCarty.value,
    }
    //объект строчки

    let HTMLstroka = `
        <tr>
            <td>${newCard.name}</td>
            <td>${newCard.system}</td>
            <td>${newCard.bank}</td>
            <td>${newCard.year}</td>
            <td>${newCard.number}</td>
        </tr>
    `
    //строка на отрисовку
    tableTelo.insertAdjacentHTML('beforeend', HTMLstroka)

    document.getElementById('formaDlyaCarty').reset()
    drawNumbers.textContent = '**** **** **** ****'
    drawClient.textContent = ''
    drawBank.textContent = ''
    drawIstekaet.textContent = ''
    drawSystem.textContent = ''
    //в задании просили очистить форму после "отправки",ну в нашем случае после добавления строки в таблицу
})
