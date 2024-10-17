let valores = [
    1,
    20,
    15,
    10,
    30,
    12,
    22,
    50
]
valores.sort()

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
*/


for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}