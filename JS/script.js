// Transforma menu hamburguer em X
const  menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

   } else {
    nav.style.display = 'none';
   }
}

// -------------------------
// Código para ampliar imagens ao clicar com navegação

// Cria o container do Lightbox dinamicamente
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.visibility = 'hidden';
lightbox.style.opacity = '0';
lightbox.style.transition = 'opacity 0.3s ease';
lightbox.style.zIndex = '1000';
document.body.appendChild(lightbox);

// Cria a imagem dentro do Lightbox
const lightboxImg = document.createElement('img');
lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';
lightboxImg.style.borderRadius = '10px';
lightbox.appendChild(lightboxImg);

// Cria os botões de navegação
const prevButton = document.createElement('button');
prevButton.innerHTML = '&#10094;';
prevButton.style.position = 'absolute';
prevButton.style.left = '20px';
prevButton.style.top = '50%';
prevButton.style.transform = 'translateY(-50%)';
prevButton.style.fontSize = '2rem';
prevButton.style.color = 'white';
prevButton.style.background = 'none';
prevButton.style.border = 'none';
prevButton.style.cursor = 'pointer';
prevButton.style.zIndex = '1001';
lightbox.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.innerHTML = '&#10095;';
nextButton.style.position = 'absolute';
nextButton.style.right = '20px';
nextButton.style.top = '50%';
nextButton.style.transform = 'translateY(-50%)';
nextButton.style.fontSize = '2rem';
nextButton.style.color = 'white';
nextButton.style.background = 'none';
nextButton.style.border = 'none';
nextButton.style.cursor = 'pointer';
nextButton.style.zIndex = '1001';
lightbox.appendChild(nextButton);

// Evento para fechar ao clicar no fundo
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.visibility = 'hidden';
        lightbox.style.opacity = '0';
    }
});

// Seleciona todas as imagens dentro das classes .contact-img e .portfolio-box
const images = document.querySelectorAll('.contact-img img, .portfolio-box img');
let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index;
        lightboxImg.src = this.src;
        lightbox.style.visibility = 'visible';
        lightbox.style.opacity = '1';
    });
});

// Função para atualizar a imagem no Lightbox
function updateLightboxImage(index) {
    if (index >= 0 && index < images.length) {
        lightboxImg.src = images[index].src;
        currentIndex = index;
    }
}

// Eventos para os botões de navegação
prevButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita fechar o lightbox ao clicar na seta
    updateLightboxImage(currentIndex - 1);
});

nextButton.addEventListener('click', (event) => {
    event.stopPropagation();
    updateLightboxImage(currentIndex + 1);
});
