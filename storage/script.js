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
    carrinho.forEach((item,index)=>{
        ulCarrinho.insertAdjacentHTML("beforeend",`<li>
            <p>${item.nome}</p>
            <button id="${item.id}${index}remove">X</button>
        </li> `)
        const btnRemove = document.getElementById(`${item.id}${index}remove`)
        btnRemove.addEventListener("click",(e)=>{
            
            removerDoCarrinho(item.id)
        })
    })
}
function removerDoCarrinho(id){
  
    const filtro = carrinho.findIndex((car)=>car.id == id)
    carrinho.splice(filtro,1)
    console.log(filtro,"index")
    console.log(id,"id")
    montarCarrinho()
}