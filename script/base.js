const logo = document.getElementById('logo')
const buttons = document.getElementById('buttons')
const header = document.querySelector('.head').offsetHeight
const body = document.getElementById('main')
const but_2 = document.getElementById('button_2')
const w = screen.width
const h = screen.height

console.log(body.style)

if (document.readyState == 'loading') {
    body.style.paddingTop = header + 5 + 'px'
    console.log(body.style)
}

