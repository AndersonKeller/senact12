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
            console.log(window)
            
        }else{
            console.log("senha correta")
            window.location.href = "./home"
        }
    })

}
login()