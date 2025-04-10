function includeHTML(file, targetId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Erreur lors du chargement de ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

window.addEventListener("DOMContentLoaded", () => {
    includeHTML("../components/Header.html", "header");
    includeHTML("../components/Footer.html", "footer");

    highlightActivePage();

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('.nav-links a');

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                links.forEach(link => link.classList.remove('active'));
                links[index].classList.add('active');
            }
        });
    });
});