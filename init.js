document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya existe un botón de retorno
    if (document.querySelector('.return-btn')) return;

    // Crear el botón de retorno
    const header = document.querySelector('header');
    if (header) {
        const returnBtn = document.createElement('div');
        returnBtn.className = 'return-btn';
        returnBtn.innerHTML = '<i class="fas fa-home"></i> Volver al menú principal';
        returnBtn.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
        
        header.appendChild(returnBtn);

        // Agregar estilos para el botón
        const style = document.createElement('style');
        style.textContent = `
            .return-btn {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #ff6d5a;
                color: white;
                padding: 10px 15px;
                border-radius: 8px;
                cursor: pointer;
                z-index: 100;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                gap: 8px;
                transition: background-color 0.3s ease;
            }
            
            .return-btn:hover {
                background-color: #41b3be;
            }
        `;
        document.head.appendChild(style);
    }
}); 