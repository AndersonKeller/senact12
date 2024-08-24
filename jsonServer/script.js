const lista = [1,2,3,4]
for(let i=0;i<lista.length;i++){
   // console.log(lista[i])
}
for(let item of lista){
    //console.log(item)
}

const objeto = {
    key1: "red",
    key2: "green"
}
for(let key in objeto){
    //console.log(key)
    //console.log(objeto[key])
}
getTypes()
const colors = {
    normal: "#000",
    poison: "#179f10"
}
async function getTypes() {
    const response = await fetch("https://pokeapi.co/api/v2/type")
    const result = await response.json()
    console.log(result)
    const ul = document.querySelector("ul")
    result.results.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
            <li style="background-color: ${colors[item.name]}"></li>
            `)
    })
}