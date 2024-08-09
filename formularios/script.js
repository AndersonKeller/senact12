function login(){
    const mensagem = "usuário ou senha inválidos, por favor, verifique seus dados!"
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
            console.log(window)
            const body = document.querySelector("body")
            body.insertAdjacentHTML("afterend",
                `
                 <div class="modal_wrapper">
        <div class="modal">
            <div class="modal_header">
                <h2>Atenção</h2>
                <button id="close">X</button>
            </div>
            <div class="modal_body">
                <p>${mensagem}</p>
                <button>Ok</button>
            </div>
            </div>
        </div>
                `
            )
            const btnClose = document.querySelector("#close")
            btnClose.addEventListener("click",()=>{
                const modal = document.querySelector(".modal_wrapper")
                modal.remove()
            })
        }else{
            console.log("senha correta")
            window.location.href = "./home"
        }
    })

}
login()