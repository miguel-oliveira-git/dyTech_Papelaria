// Alternar Menu Mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Fecha o menu mobile se estiver aberto
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Envio de formulário (sem backend)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Aqui normalmente você enviaria os dados para um servidor
    // Para este demo, apenas mostramos um alerta
    alert(`Obrigado, ${name}! Sua mensagem sobre "${subject}" foi recebida. Entraremos em contato em breve pelo e-mail ${email}.`);

    // Reseta o formulário
    contactForm.reset();
});

// Adiciona classe de animação ao rolar para os elementos
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in-up');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('animate-fade-in-up');
        }
    });
};
// Adiciona a classe de animação ao rolar para os elementos
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);