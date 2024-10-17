let numero = document.getElementById('num')
let lista = document.getElementById('seltab')
let resultado = document.getElementById('res')
let valores = []

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100)
        return true
    else {
        return false
    }
}

function inLista(num, lista) {
    if(lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor já encontrado ou invalido!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Nenhum numero foi adicionado!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, tem ${tot} números cadastrados </p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`
        resultado.innerHTML += `<p>A media de todos os valores é de ${media}.</p>`
    }
}