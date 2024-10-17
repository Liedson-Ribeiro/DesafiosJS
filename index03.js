let valores = [1,10,4,20,12]
valores.push(2)
valores.sort()
console.log(valores)
console.log(`O valor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(12)
if (pos == -1) {
    console.log('O valor não está presente no vetor')
} else {
    console.log(`O valor está na posição ${pos}`)
}