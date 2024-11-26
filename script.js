// scripts.js
document.getElementById('booking-form').addEventListener('submit', function(event) {
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const phone = document.querySelector('[name="phone"]');
    const date = document.querySelector('[name="date"]');
    const service = document.querySelector('[name="service"]');

    if (!name.value || !email.value || !phone.value || !date.value || !service.value) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Agendamento realizado com sucesso!");
    }
});