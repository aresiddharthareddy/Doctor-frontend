const appointmentForm = document.getElementById('appointmentForm');
const formMessage = document.getElementById('formMessage');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if(!name || !email || !phone || !doctor || !date || !time){
        formMessage.textContent = "Please fill all the fields correctly!";
        formMessage.style.color = "red";
        return;
    }

    // Success Message
    formMessage.textContent = `Thank you, ${name}! Your appointment with ${doctor} on ${date} at ${time} has been booked.`;
    formMessage.style.color = "#008080";

    // Reset Form
    appointmentForm.reset();
});
