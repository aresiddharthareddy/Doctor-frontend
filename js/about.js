// About Page: fade-in animation for team and mission sections
const aboutSections = document.querySelectorAll('.mission, .team-member');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

aboutSections.forEach(section => {
    observer.observe(section);
});
