const text_1 = document.getElementById('text_1')
const text_3 = document.getElementById('text_3')
const a_1 = document.getElementById('a_1')
let a_1_href = a_1.getAttribute('href')

const div_1 = document.getElementById('div_1')
const div_2 = document.getElementById('div_2')

const w = screen.width
const h = screen.height

if (document.readyState == 'loading') {
    if (w <= 1450) {
        a_1.setAttribute('href', '')
    }
}


text_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    text_1.style.borderTop = 'solid'
    text_1.style.borderBottom = 'solid'
})

text_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    text_1.style.borderTop = 'None'
    text_1.style.borderBottom = 'None'
})

a_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    a_1.style.animation = 'None'
})

a_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    a_1.style.animation = 'color_text 3s infinite'
})

text_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    for (let i=100; i>70; i--) {
        div_1.style.width = i+'%'
        div_2.style.left = i+'%'
    }
})

text_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    for (let i=70; i<101; i++) {
        div_1.style.width = i+'%'
        div_2.style.left = i+'%'
    }
})

