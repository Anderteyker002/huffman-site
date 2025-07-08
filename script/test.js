const str_original = '4217641729 74127748912789471 78917274'
const str_changed_orig = str_original.toLowerCase()
const str_changed_orig2 = str_changed_orig.replace(/ /g, "_")

let obj = {}
let count_symbol = 0
let dict_unification = {}

let contrl_ans = 0
let lst_answer = []
let ans = 0
let ans_koeff = 0

function dict_to_lst(dict) {
    let lst = []
    for (i in dict) {
        lst.push(i)
    }
    return lst
}


function sorted_dicts(dicts) {
    let massiv = []
    let obj3 = {}
    for (let i in dicts) {
        massiv.push([i, dicts[i]])
    }
    massiv = massiv.sort(function(a, b) {
        console.log(a, b, a[1], b[1])
        if (a[1] > b[1]) {return 1}
        if (a[1] === b[1]) {return 0}
        if (a[1] < b[1]) {return -1}
    })
    
    for (let i in massiv) {
        let key = massiv[i][0]
        let znach = massiv[i][1]
        obj3[key] = znach
    }
    console.log(massiv)
    console.log(obj3)
    return obj3
}


for (let i = 0; i < str_changed_orig2.length; i++) {
    count_symbol = 0
    x = str_changed_orig2[i] in obj
    if (x === false) {
        for (let j=0; j < str_changed_orig2.length; j++) {
            if (str_changed_orig2[i] === str_changed_orig2[j]) {
                count_symbol += 1
            }
        }
        obj[str_changed_orig2[i]] = count_symbol
    }
}

sorted_dict = sorted_dicts(obj)
dict_for_verification = sorted_dicts(obj)
list = dict_to_lst(sorted_dict)


for (let i in list) {
    dict_unification[list[i]] = 0
}


while (list.length != 1) {
    let r1 = list[0]
    let r2 = list[1]
    let symbol = r2 + r1

    sorted_dict[symbol] = sorted_dict[r1] + sorted_dict [r2]
    delete sorted_dict[r1]
    delete sorted_dict[r2]

    sorted_dict = sorted_dicts(sorted_dict)

    list = dict_to_lst(sorted_dict)
    console.log(list, sorted_dict)



    for (j in dict_unification) {
        if (symbol.indexOf(j) != -1) {
            dict_unification[j] = dict_unification[j] + 1
        }
    }
}



for (i in dict_unification) {
    let a1 = dict_unification[i]
    let b1 = dict_for_verification[i]
    lst_answer.push(a1*b1)
}


for (x in sorted_dict) {
    ans = 8 * sorted_dict[x]
}



for (sum in lst_answer) {
    contrl_ans += lst_answer[sum]
}

ans_koeff = Math.round((contrl_ans/ans)*100)


console.log('Вес до сжатия: ', ans, 'Вес после сжатия: ', contrl_ans, 'Коэффициент сжатия: ', ans_koeff + '%')

