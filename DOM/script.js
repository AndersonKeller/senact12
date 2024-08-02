const button = document.querySelector("button")

button.classList.add("display")
// button
console.log(button)
const header = document.querySelector("header")
console.log(header)
const p = document.createElement("p")
p.innerText = "Novo parágrafo"
header.classList.add("header2")
console.log(p)
const img = document.createElement("img")
img.src = ""
function clickdoBotao(){}
button.addEventListener("click",(event)=>{
 
    const pEmTela = document.querySelector("p")
    if(pEmTela){
        p.remove()
        button.innerText = "esta em tela"
    }else{
        header.append(p,img)
        button.innerText = "capturado"
    }
})