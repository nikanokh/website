const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    const isActive = button.classList.contains('active');
    button.setAttribute('aria-expanded', isActive);
    menu.setAttribute('aria-hidden', !isActive);
    
    menuLinks.forEach(link => link.setAttribute('tabindex', isActive ? '0' : '-1'));
    
    
    if (isActive) {
        menu.style.display = 'block'; 
        setTimeout(() => {
            menu.style.maxHeight = menu.scrollHeight + 'px'; 
        }, 10); 
    } else 
    {
        menu.style.maxHeight = '0'; 
        setTimeout(() => {
            menu.style.display = 'none'; 
        }, 500); 
    }
});