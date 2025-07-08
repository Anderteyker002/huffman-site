const form = document.getElementById('myForm')
const p_text_1 = document.getElementById('txt')
const but = document.getElementById('but')
const huf = document.querySelector('.huf')
var loading_count = 0
const s = document.documentElement.outerHTML.split('\n')

let d = 0


form.addEventListener("submit", function forms(event) {
    event.preventDefault()

    const val = form.querySelector('[id = "inp"]').value

    d = huffman(val)

    const p_1 = document.createElement('p')
    
    p_1.textContent = d
    p_text_1.textContent = s.length

    huf.appendChild(p_1)
})

if (document.readyState == 'loading') {
    console.log('loading', s.length)
} 


//1-------------

//keys_to_list - создает список ключей, которые взял из двумерного массива: [['ключ','значение'], ['ключ','значение']...]
function keys_to_list(dv) {
    let lst = []
    for (i in dv) {
        lst.push(dv[i][0])
    }
    return lst
}

// sort_dv - сортирует двумерный массив, по возрастанию второго элемента в массивах
function sort_dv(dv) {
    dv = dv.sort(function(a, b) {
        if (a[1] > b[1]) {return 1}
        if (a[1] === b[1]) {return 0}
        if (a[1] < b[1]) {return -1}
    })
    return dv
}

//create_dv - создает двумерный массив по полученной строке. Пример двумерного массива: [['Символ', 'Кол-во повторений символа']...]
function create_dv(str_changed_orig2, dv_massiv05) {
    for (let i in str_changed_orig2) {
        count_symbol = 0
        flag = true
        for (let j in dv_massiv05) {
            if (dv_massiv05[j][0] === str_changed_orig2[i]){
                flag = false
                break
            }
        }
        if (flag === true) {
            for (let x in str_changed_orig2) {
                if (str_changed_orig2[i] === str_changed_orig2[x]) {
                    count_symbol += 1
                }
            }
            dv_massiv05.push([str_changed_orig2[i], count_symbol])
        }
    }
    return dv_massiv05.splice(0, 1)
}

function huffman(d){
    const str_original = d
    const str_changed_orig = str_original.toLowerCase()
    const str_changed_orig2 = str_changed_orig.replace(/ /g, "_")

    let dv_massiv = [[false, false]]
    let dv_massiv2 = [[true, false]]
    let flag = false
    let count_symbol = 0
    let dv_unification = []

    let ansver = 0
    let ans = 0
    let ans_koeff = 0

    //1.5-------------
    dv_massiv == create_dv(str_changed_orig2, dv_massiv)
    dv_massiv2 == create_dv(str_changed_orig2, dv_massiv2)


    let sort_dv_massiv = sort_dv(dv_massiv)
    let dv_for_verf = sort_dv(dv_massiv2)
    list = keys_to_list(dv_massiv)

    for (let i in list) {
        dv_unification.push([list[i], 0])
    }


    //2-------------
    while (list.length != 1) {
        let key1 = list[0]
        let key2 = list[1]
        let znch1 = 0
        let znch2 = 0
        let count = 0

        let symbol = key2 + key1

        for (let z in sort_dv_massiv) {
            if (key1 === sort_dv_massiv[z][0]) {
                znch1 = sort_dv_massiv[z][1]
                count = z
            }
        }
        sort_dv_massiv.splice(count, 1)
        count = 0

        for (let z in sort_dv_massiv) {
            if (key2 === sort_dv_massiv[z][0]) {
                znch2 = sort_dv_massiv[z][1]
                count = z
            }
        }
        sort_dv_massiv.splice(count, 1)

        sort_dv_massiv.push([symbol, znch1+znch2])
        sort_dv_massiv = sort_dv(sort_dv_massiv)

        list = keys_to_list(sort_dv_massiv)

        for (let keys in dv_unification) {
            if (symbol.indexOf(dv_unification[keys][0]) != -1) {
                dv_unification[keys][1] = dv_unification[keys][1] + 1
            }
        }

    }
    //3-------------

    for (let i in dv_unification) {
        let a1 = dv_unification[i][1]
        let b1 = dv_for_verf[i][1]
        ansver += a1*b1
    }

    for (let j in sort_dv_massiv) {
        ans = 8 * sort_dv_massiv[j][1]
    }

    ans_koeff = Math.round((ansver/ans)*100)

    return 'Вес до сжатия: ' + ans +' Вес после сжатия: ' + ansver + ' Коэффициент сжатия: '+ ans_koeff + '%'
}
