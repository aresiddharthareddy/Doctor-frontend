const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
        contactMessage.textContent = "Please fill all the fields!";
        contactMessage.style.color = "red";
        return;
    }

    contactMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    contactMessage.style.color = "#008080";

    contactForm.reset();
});
