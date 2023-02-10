
const formulario = document.querySelector(".form")
const campoInput = document.querySelectorAll(".input")
const campoObrigatorio = document.querySelectorAll(".erro-mensagem")
const enviarFormulario = document.querySelector(".btn-enviar");



formulario.addEventListener("submit", (event) =>{
    event.preventDefault()

        campoInput.forEach((input, index) => {

        if(input.value === ""){
            
            input.classList.add("erro");
            campoObrigatorio[index].style.visibility = "visible";                    
            
        }else {
           input.classList.add("sucesso");
        }           
    }) 
})
 





 
























