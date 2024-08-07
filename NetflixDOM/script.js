const usuarios = [
    {
        nome:"José",avatar:"./img/download.png"
    },
    {
        nome: "João", avatar:"./img/download2.png"
    },
    {
        nome: "Maria",avatar:"./img/download3.png"
    },
    {
        nome:"Pedro",avatar: "./img/download4.png"
    }
]

function mountpage(){
    createHeader()
    createMainUsuarios()
}
mountpage()
function createHeader (){
    const body = document.querySelector("body")
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    h1.innerText = "NETFLIX"
    const h2 = document.createElement("h2")
    h2.innerText =  "Quem está assistindo?"

    header.append(h1,h2)

    body.appendChild(header)
}
//createHeader()
function createMain(){
    const body = document.querySelector("body")
    const main = document.createElement("main")
    const ul = document.createElement("ul")

    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")
    const li4 = document.createElement("li")

    const img1 = document.createElement("img")
    const img2 = document.createElement("img")
    const img3 = document.createElement("img")
    const img4 = document.createElement("img")
    img1.src = "./img/download.png"
    li1.appendChild(img1)
    ul.append(li1,li2,li3,li4)
    main.appendChild(ul)
    body.appendChild(main)
}
// createMain()
function createMainUsuarios(){
    const body = document.querySelector("body")
    const main = document.createElement("main")
    const ul = document.createElement("ul")


    for(let i=0;i<usuarios.length;i++){
        ///execução
    }
    usuarios.forEach((usuario)=>{
        const li = document.createElement("li")
        const img = document.createElement("img")
        img.src = usuario.avatar
        const p = document.createElement("p")
        p.innerText = usuario.nome
        li.append(img,p)
        ul.appendChild(li)
    })
    const button = document.createElement("button")
    button.innerText = "Acessar"
    main.append(ul,button)
    body.appendChild(main)
}
// createMainUsuarios()
{/* <header>
        <h1>NETFLIX</h1>
        <h2>Quem está assistindo?</h2>
    </header>
    <main>
        <ul>
            <li>
                <img src="./img/download.png" alt="José">
                <p>José</p>
            </li>
            <li>
                <img src="./img/download2.png" alt="João">
                <p>João</p>
            </li>
            <li>
                <img src="./img/download3.png" alt="Maria">
                <p>Maria</p>
            </li>
            <li>
                <img src="./img/download4.png" alt="Pedro">
                <p>Pedro</p>
            </li>
        </ul>
        <button>Acessar</button>
    </main> */}