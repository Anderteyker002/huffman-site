const text_1 = document.getElementById('text_1')
const text_3 = document.getElementById('text_3')
const a_1 = document.getElementById('a_1')


const div_1 = document.getElementById('div_1')
const div_2 = document.getElementById('div_2')
const div_text = document.createElement('p')
const div_but = document.createElement('button')
const div_but_p = document.createElement('p')
div_but_p.appendChild(div_but)

div_text.innerHTML = 'Программа, которая сжимает строку, вводимую пользователем, по алгоритму сжатия Хаффмана'
div_but.innerHTML = 'Перейти на сайт'

const w = screen.width
const h = screen.height
let flag = true
let flag_to_clip = true

if (document.readyState == 'loading') {
    if (w <= 1450) {
        flag = false
        
        a_1.removeAttribute('href')
        div_2.style.display = 'none'
        div_text.setAttribute('class', 'text_1_1')

        div_but.setAttribute('class', 'but_index')
        div_but_p.setAttribute('class', 'but_div')

        div_1.appendChild(div_text)
        div_1.appendChild(div_but_p)
    }
}


div_but.addEventListener('click', function() {
    window.location.href = './base.html'
})


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

