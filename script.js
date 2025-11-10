document.addEventListener('DOMContentLoaded', () => {
    // Cerrar modal al hacer clic fuera del contenido
    document.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('symbol-modal:not(.hidden)');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Efecto de escritura para la carta (opcional)
    const letterContent = document.querySelector('.text-lg');
    if (letterContent) {
        const originalText = letterContent.innerHTML;
        letterContent.innerHTML = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                letterContent.innerHTML += originalText.charAt(i);
                i++;
                letterContent.scrollTop = letterContent.scrollHeight;
            } else {
                clearInterval(typingEffect);
            }
        }, 20);
    }
});