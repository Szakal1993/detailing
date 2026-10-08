const menu = document.querySelector('.nav-menu')
const btnBurger = document.querySelector('.btn-burger')
const links = document.querySelectorAll('.nav-menu a')
const cards = document.querySelectorAll('.opinion-text')

btnBurger.addEventListener('click', () => {
    menu.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click',() => {
        menu.classList.remove('active')
    })
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !btnBurger.contains(e.target)){
        menu.classList.remove('active')
    }
})

let currentCard = 0

function showCard(index) {

    cards.forEach(card => {
        card.classList.remove('view')
    })

    cards[index].classList.add('view')
}


function nextCard() {

    currentCard++

    if (currentCard >= cards.length) {
        currentCard = 0
    }

    showCard(currentCard)
}


function prevCard() {

    currentCard--

    if (currentCard < 0) {
        currentCard = cards.length - 1
    }

    showCard(currentCard)
}


cards.forEach(card => {

    const right = card.querySelector('.bi-arrow-right')
    const left = card.querySelector('.bi-arrow-left')

    right.addEventListener('click', nextCard)
    left.addEventListener('click', prevCard)


    let touchStartX = 0

    card.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX
    })


    card.addEventListener('touchend', e => {

        const touchEndX = e.changedTouches[0].screenX
        const difference = touchStartX - touchEndX

        if (difference > 50) {
            nextCard()
        }

        if (difference < -50) {
            prevCard()
        }

    })

})

if (year) {
    year.textContent = new Date().getFullYear();
}