document.addEventListener("DOMContentLoaded", function () {
    const salas = document.querySelectorAll(".sala .imagens");



    const botoesReserva = document.querySelectorAll(".botao-reserva");
    botoesReserva.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://api.whatsapp.com/send/?phone=5522992771914&text&type=phone_number&app_absent=0", "_blank");
        });
    });
});
