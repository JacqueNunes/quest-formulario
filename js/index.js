
const formulario = document.querySelector(".form")
const campoInput = document.querySelectorAll(".input")
const campoObrigatorio = document.querySelectorAll(".erro-mensagem")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    campoInput.forEach((input, index) => {

        if (input.value === "") {

            input.classList.add("erro");
            campoObrigatorio[index].classList.add("visible")

        } else {

            input.classList.add("sucesso");
            input.classList.remove("erro");
            campoObrigatorio[index].classList.remove("visible")
        }
    })
})

    campoInput.forEach((input, index) => {
        input.addEventListener("change", (event) => {

        if (input.value === "") {

            input.classList.add("erro");
            campoObrigatorio[index].classList.add("visible")

        } else {

            input.classList.add("sucesso");
            input.classList.remove("erro");
            campoObrigatorio[index].classList.remove("visible")
        }
    })
})

































