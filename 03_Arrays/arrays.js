

let tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

tabuada.forEach(element => {
    console.log(element)
});

console.log("\nTabuada do 7")
for (const v of tabuada) {
    console.log("7 x " + v + " = " + (7 * v))
}

const maior5 = (x) => {
    if (x >= 5)
        return 5
}

const par = x => {
    return (x % 2 == 0)
}

const par2 = x => (x % 2 == 0)

const f1 = tabuada.filter(maior5)
console.log(f1)

const f2 = tabuada.filter((x) => {
    if (x % 2 == 0)
        return x
})
console.log(f2)


const f3 = tabuada.filter(x => x % 2 == 0)