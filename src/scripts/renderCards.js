/**
 * Массив объектов карточек, отрисовываемых в контентный блок по событию load у body
 * */
const cards = [{
    id: 1,
    image: './images/list-images/item1.png',
    label: 'Природа',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    category: 'Дзен'
}, {
    id: 2,
    image: './images/list-images/item2.png',
    label: 'Природа',
    date: '2 августа, 2019',
    title: 'Лесные огоньки: история одной фотографии',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    category: 'Афиша'
}, {
    id: 3,
    image: './images/list-images/item3.png',
    label: 'Тайга',
    date: '2 августа, 2019',
    title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
    description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...',
    category: 'Медиазона'
}, {
    id: 4,
    image: './images/list-images/item4.png',
    label: 'Парки',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    category: 'Дзен'
}, {
    id: 5,
    image: './images/list-images/item5.png',
    label: 'Фотография',
    date: '2 августа, 2019',
    title: 'Национальное достояние – парки',
    description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    category: 'Афиша'
}]

function renderCards() {
    const cardsTemplates = cards
        .map(card => createCard(card))
        .join('')
    
    const renderNode = document.getElementById('cards-list')
    renderNode.innerHTML = cardsTemplates
}

/**
 * @param {object} card
 * @param {number} card.id
 * @param {string} card.image
 * @param {string} card.label
 * @param {string} card.date
 * @param {string} card.title
 * @param {string} card.description
 * @param {string} card.category
 * @returns {string}
 */
function createCard(card) {
    return `<div id="card-${card.id}" class="card">` +
                '<div class="card__image">' +
                    `<img src="${card.image}" alt="">` +
                    '<div class="card__header">' +
                        '<div class="card__header--label">' +
                            `<span>${card.label}</span>` +
                        '</div>' +
                        `<div class="card__header--btn-delete" onclick="deleteCard(${card.id})">` +
                            '<button>' +
                                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" fill="#B6BCBF"/></svg>' +
                            '</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="card__content">' +
                    '<div class="card__content--date">' +
                        `<span>${card.date}</span>` +
                    '</div>' +
                    '<div class="card__content--title">' +
                        `<span>${card.title}</span>` +
                    '</div>' +
                    '<div class="card__content--description">' +
                        `<span>${card.description}</span>` +
                    '</div>' +
                    '<div class="card__content--category">' +
                        `<span>${card.category}</span>` +
                    '</div>' +
                '</div>' +
            '</div>'
}

/**
 * @param {number} cardId
 */
function deleteCard(cardId) {
    cards.splice(cards.findIndex(item => item.id === cardId), 1)
    const cardEl = document.getElementById(`card-${cardId}`)
    cardEl.style.opacity = '0'
    setTimeout(() => cardEl.remove(), 200) // задержка 200ms, ожидание завершения css transition 200ms
}
