// Filter doctors by specialty
const specialtySelect = document.getElementById('specialty');
const doctorCards = document.querySelectorAll('.doctor-card');

specialtySelect.addEventListener('change', () => {
    const value = specialtySelect.value;
    doctorCards.forEach(card => {
        if(value === 'all' || card.dataset.specialty === value){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal functionality
const modal = document.getElementById('doctorModal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalSpecialty = document.getElementById('modal-specialty');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.view-profile').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.doctor-card');
        modal.style.display = 'flex';
        modalImg.src = card.querySelector('img').src;
        modalName.textContent = card.querySelector('h3').textContent;
        modalSpecialty.textContent = card.querySelector('p').textContent;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
