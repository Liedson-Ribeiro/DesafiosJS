const agora = new Date()
let hora = agora.getHours()
let text1 = document.querySelector("#conteudo1 > p")
let body = document.getElementById("body")

hora = 11

text1.innerHTML = `O horario atual é: <strong>${hora} horas</strong>`

if (hora >= 6 && hora < 12) {
    document.querySelector("body").style.backgroundColor = 'rgba(25, 25, 211, 0.74)'
    document.getElementById("dia").style.display = 'block'
    document.getElementById("tarde").style.display = 'none'
    document.getElementById("noite").style.display = 'none'
} else if (hora >= 12 && hora <= 18) {
    document.querySelector("body").style.backgroundColor = '#F4A460'
    document.getElementById("dia").style.display = 'none'
    document.getElementById("tarde").style.display = 'block'
    document.getElementById("noite").style.display = 'none'
} else if (hora >= 18 && hora <= 23) {
    document.querySelector("body").style.backgroundColor = '#121212'
    document.getElementById("dia").style.display = 'none'
    document.getElementById("tarde").style.display = 'none'
    document.getElementById("noite").style.display = 'block'
} else if (hora >= 0 && hora < 6) {
    document.querySelector("body").style.backgroundColor = '#0A1D3D'
    document.getElementById("dia").style.display = 'none'
    document.getElementById("tarde").style.display = 'none'
    document.getElementById("noite").style.display = 'block'
}

