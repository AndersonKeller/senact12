//varáiveis
//var banana = "banana" não é mais usado
let banana = "banana"
//let quando precisa alterar o valor da variável
banana = 4
//const quando não se deve, ou não necessite mudar o valor da variável
const banana2 = "banana"
//tipos primitos
// string = '' ou " iuashdiasg%%"
//numero= 4, 6.7,7,8
//array = [4,4,5,"dasidas"]
// objeto = {key:value} {chave:valor}
const banana4 = {nome:"banana",valor:20}

// console.log(banana4)
// boolean = true false
// undefined null NaN

function retorna_nome_banana(){
    
    console.log(banana4.nome)
}
const retornaNomeBanana = ()=>{
    console.log(banana4.nome)
}
// retorna_nome_banana()
//parametro
function retornaNome(nome){
    console.log(nome)
}
// retornaNome("abacaxi")
//for
const array = [67,90,4,5,8,10,11,15,88,"t"]

for(let i = 0; i < array.length; i++){
    console.log(i,array[i],"for")
}
// if(condicao){
//     //executa
// }else if("outra condicao"){
//     //executa
// }else{
//     //executa caso nenhuma seja atendida
// }
//dado um array de numero, retorne somente os pares
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log("par", array[i])
    }
}
//filter, retorna um array de elementos que passarem em alguma condição
const filtro = array.filter( (item)=>{
    if(item%2==0){
        // console.log("par", array[i])
        return item
    }
})
console.log(filtro)
//forEach, percorre um array, não retorna nada
array.forEach((item)=>{
    if(item%2==0){
        console.log("par forEach", item)
    }
})
//retorna um array do mesmo tamanho com a alteração que 
//for passada
const arrayMap = array.map((item)=>{
    return item*2
})
// console.log(arrayMap)
const lista = [0,0,0]

const novaLista = lista.map((pedra)=>{
    pedra = 10
    return pedra
})
const objeto1 = {nome:"Maria",idade:20}
// let objeto2 = {...objeto1} //
let objeto2 = Object.assign({},objeto1)
objeto2.nome = "João"
console.log(objeto1,"objeto1")
console.log(objeto2,"objeto2")

//dado um array de numeros
//[1,4,5,6,7,8]
//a função recebe um array como parametro 
//criar uma função que retorne esse array invertido









