function login(){
    const form = document.querySelector("form")
    const button = document.querySelector("button")
    const email = document.querySelector("#email")
        console.log(email.value)
        const password = document.querySelector("#password")
        console.log(password.value)
    // if(password.value == "" || password.value == ""){
    //     button.setAttribute("disabled",true)
    // }
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        console.log(event,"event")
        if(password.value != "1234" ){
            console.log("Senha errada")
            
            openModal("usuário ou senha inválidos","Erro!","erro")
        }else{
            openModal("sucesso, seja bem vindo!","Sucesso!","success")
        }
    })

}
login()
function openModal(mensagem, titulo, tipo){
    const body = document.querySelector("body")
            body.insertAdjacentHTML("afterend",
                `
                 <div class="modal_wrapper">
        <div class="modal">
            <div class="modal_header ${tipo == 'erro'?'modal_header_error':'' }">
                <h2>${titulo}</h2>
                <button id="close">X</button>
            </div>
            <div class="modal_body">
                <p>${mensagem}</p>
                <button id="btnOk">Ok</button>
            </div>
            </div>
        </div>
                `
            )
            
            if(tipo==="success"){
                const btnOk = document.querySelector("#btnOk")
                btnOk.addEventListener("click",()=>{
                    window.location.href = "/home"
                })
                const btnClose = document.querySelector("#close")
                btnClose.addEventListener("click",()=>{
                    const modal = document.querySelector(".modal_wrapper")
                    modal.remove()
                    window.location.href = "/home"
            })
            }else{
                const modal = document.querySelector(".modal_wrapper")
                const btnOk = document.querySelector("#btnOk")
                btnOk.addEventListener("click",()=>{
                    modal.remove()
                })
                const btnClose = document.querySelector("#close")
                btnClose.addEventListener("click",()=>{
                    
                modal.remove()}
            )
            }
}

// console.log("1" == 1,"1 == 1")