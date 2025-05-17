document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const copyButtons = document.querySelectorAll('.code-actions i.fa-copy');
    
    // Función de filtrado para la búsqueda
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            const codeExample = card.querySelector('code').textContent.toLowerCase();
            
            // Verificar si alguno de los campos contiene el término de búsqueda
            const matchesSearch = 
                title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                codeExample.includes(searchTerm);
            
            // Mostrar/ocultar tarjetas según la coincidencia
            if (matchesSearch) {
                card.style.display = 'block';
                // Pequeña animación cuando se encuentra una coincidencia
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeIn 0.5s forwards';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Funcionalidad de copiar código
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontrar el contenedor de código más cercano
            const codeContainer = this.closest('.code-container');
            const codeText = codeContainer.querySelector('code').innerText;
            
            // Copiar al portapapeles
            navigator.clipboard.writeText(codeText)
                .then(() => {
                    // Cambiar icono temporalmente para dar feedback
                    const originalIcon = this.className;
                    this.className = 'fas fa-check';
                    this.parentElement.style.color = '#4CAF50';
                    
                    // Volver al icono original después de un tiempo
                    setTimeout(() => {
                        this.className = originalIcon;
                        this.parentElement.style.color = '';
                    }, 1500);
                })
                .catch(err => {
                    console.error('Error al copiar el texto: ', err);
                    this.parentElement.style.color = '#f44336';
                });
        });
    });
    
    // Animación al hacer hover sobre las tarjetas
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const codeBlock = card.querySelector('pre');
            if (codeBlock) {
                codeBlock.style.transition = 'transform 0.3s ease';
                codeBlock.style.transform = 'translateY(-2px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const codeBlock = card.querySelector('pre');
            if (codeBlock) {
                codeBlock.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Agregar tooltips para los botones de copiar
    copyButtons.forEach(button => {
        button.setAttribute('title', 'Copiar al portapapeles');
    });
    
    // Contador de tarjetas por categoría
    const functionCards = document.querySelectorAll('.card[data-category="function"]').length;
    const variableCards = document.querySelectorAll('.card[data-category="variable"]').length;
    
    // Mostrar mensaje de estadísticas en la consola
    console.log(`Métodos disponibles: ${functionCards}`);
    console.log(`Variables disponibles: ${variableCards}`);
    console.log(`Total: ${functionCards + variableCards}`);
}); 