function search(){
    const input= document.querySelector("input")
    const posts = JSON.parse(localStorage.getItem("posts"))

    input.addEventListener("input",(event)=>{
       
        const filtrada = posts.filter((post)=>{
            
            return post.body.toLowerCase().includes(event.target.value.toLowerCase()) || post.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        console.log(filtrada,"filter")
        montarLista(filtrada)
    })
}
search()
async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await response.json()
    console.log(result,"result")
    localStorage.setItem("posts",JSON.stringify(result))
    montarLista(result)
}
getPosts()
function montarLista(lista=[]){
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    lista.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
            <li>
             <p>${item.title}</p>
            <p>${item.body}</p>
            <button>Ver mais</button>
        </li>
            `)
    })
}