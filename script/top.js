const text_1 = document.getElementById('text_1')
const text_3 = document.getElementById('text_3')
const a_1 = document.getElementById('a_1')


const div_1 = document.getElementById('div_1')
const div_2 = document.getElementById('div_2')
const div_1_1 = document.createElement('p')
const div_1_2 = document.createElement('a')
div_1_1.innerHTML = 'Программа, которая сжимает строку, вводимую пользователем, по алгоритму сжатия Хаффмана'
div_1_2.innerHTML = 'Перейти на сайт'

const w = screen.width
const h = screen.height
let flag = true

if (document.readyState == 'loading') {
    if (w <= 1450) {
        flag = false
        
        a_1.setAttribute('href', '#123')
        div_2.style.display = 'none'
        div_1_1.setAttribute('class', 'text_1_1')

        div_1_2.setAttribute('class', 'text_1_1')
        div_1_2.style.textDecoration = 'underline #9a1750'
        div_1_2.style.fontWeight = '100'
        div_1_2.setAttribute('href', './base.html')

        div_1.appendChild(div_1_1)
        div_1.appendChild(div_1_2)
    }
}


text_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    if (flag) {
        text_1.style.borderTop = 'solid'
        text_1.style.borderBottom = 'solid'
    }
})

text_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    text_1.style.borderTop = 'None'
    text_1.style.borderBottom = 'None'
})

a_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    if (flag) {
        a_1.style.animation = 'None'
    }
})

a_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    a_1.style.animation = 'color_text 3s infinite'
})

text_1.addEventListener('mouseover', function(event){
    event.preventDefault()
    if (flag) {
        for (let i=100; i>70; i--) {
            div_1.style.width = i+'%'
            div_2.style.left = i+'%'
        }
    }
})

text_1.addEventListener('mouseout', function(event){
    event.preventDefault()
    for (let i=70; i<101; i++) {
        div_1.style.width = i+'%'
        div_2.style.left = i+'%'
    }
})

