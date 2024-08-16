const data =[
    {id:1,nome:"tv"},
    {id:2,nome:"tv2"},
    {id:3,nome:"tv3"}
]
let carrinho =[]
listarItems()
function listarItems(){
    const ul =document.querySelector(".items")
    data.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
            <li>
            <p>${item.nome}</p>
            <p>${item.id}</p>
            <button id=${item.id}>Adicionar ao carrinho</button
        </li> 
            `)
        const btnAdd = document.getElementById(item.id)
        btnAdd.addEventListener("click",()=>{
            carrinho.push(item)
            montarCarrinho()
        })
    })
}
function montarCarrinho(){
    const ulCarrinho = document.querySelector(".carrinho")
    ulCarrinho.innerHTML=""
    carrinho.forEach((item)=>{
        ulCarrinho.insertAdjacentHTML("beforeend",`<li>
            <p>${item.nome}</p>
            <button id="${item.id}remove">X</button>
        </li> `)
        const btnRemove = document.getElementById(`${item.id}remove`)
        btnRemove.addEventListener("click",()=>{
            removerDoCarrinho(item.id)
        })
    })
}
function removerDoCarrinho(id){
    console.log(id)
    const filtro = carrinho.filter((car)=>car.id !=id)
    carrinho = filtro
    montarCarrinho()
}