const nome = "Anderson"
const sobrenome = "Keller"
const nomeCompleto = nome + " " + sobrenome
const valor1 = 1
const valor2 = "0.9"
const soma = valor1 + Number(valor2)
// console.log(soma.toFixed(2))


const frase = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio temporibus perferendis quas deleniti nesciunt, optio architecto unde velit provident, vero fugiat qui illo quo est iure dolorum voluptate amet et."
//separa um string em array
const lista = frase.split(" ")
//une uma lista para string
lista.join()
// console.log(lista.join())
const obj = "armario"
const obj2 = "Armario"
if(obj.toLowerCase()===obj2.toLowerCase()){
    // console.log("true")
}
obj.toLowerCase()

const carrinho = [{
    id:"1",nome:"1",preco:"900"
},{
    id:"2",nome:"2",preco:"900"
},{
    id:"3",nome:"3",preco:"900"
}
]
// console.log("carrinho",carrinho)
const result = carrinho.filter((item)=>{
    return item.id !== "1"
})
// console.log(result,"result")
const findItem = carrinho.find((item)=>{
    return item.id === "9"
})
if(findItem){
    findItem.qtd +=1
}else{
    // carrinho.push(findItem)
}
// console.log(findItem,"find")
// console.log("carrinho",carrinho)
const listaN = [1,2,3,4,5]
//listas e string
listaN.includes(9)
const stringN = "banana"
// console.log(stringN.includes("b"))
let somaN = 0
carrinho.forEach((item)=>item.preco = Number(item.preco))
console.log(carrinho)
// carrinho.forEach((item)=>{
//     somaN += item.preco
// })
// console.log(somaN)
//reduz um array a um único valor
const reduce = carrinho.reduce((prev,next)=>{
    return prev += next.preco
},0)
console.log(reduce,"reduce")


const lista3 = [1,2,4]
// const splice = lista3.splice(0,1)
// console.log(splice,"splice")
// console.log(lista3,"original")

//findIndex retorna o index do elemento
const index = lista3.findIndex((item)=>item===4)
if(index !== -1){
    lista3.splice(index,1)
}
console.log(index,"index")
console.log(lista3,"original")

const btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    console.log("click")
    const div = document.querySelector(".animacao")
    div.classList.add("spinner")
})
