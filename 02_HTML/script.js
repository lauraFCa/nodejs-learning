import soma from "./func.js"

const r = document.getElementById('result')
const v1 = document.getElementById('cp1')
const v2 = document.getElementById('cp2')

const btn = document.getElementById("btn")
btn.addEventListener ("click", () => {
    r.innerHTML = "O resultado é "+ soma(parseInt(v1.value), parseInt(v2.value))
    console.log('Click no botao')
})
