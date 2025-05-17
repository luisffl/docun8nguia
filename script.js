document.addEventListener('DOMContentLoaded', function() {
    // Definir los directorios y su información
    const directories = [
        {
            id: 'n8n-funcionesdot',
            title: 'Métodos de Transformación de Datos',
            description: 'Documentación de funciones integradas para transformar datos en n8n',
            icon: 'fa-code'
        },
        {
            id: 'n8n-objetos-raiz',
            title: 'Objetos Raíz',
            description: 'Información sobre los objetos raíz disponibles en n8n',
            icon: 'fa-object-group'
        },
        {
            id: 'n8n-operadores-logicos',
            title: 'Operadores Lógicos',
            description: 'Documentación sobre operadores lógicos en n8n',
            icon: 'fa-code-branch'
        },
        {
            id: 'n8n-tipos-especiales',
            title: 'Tipos Especiales',
            description: 'Información sobre tipos de datos especiales en n8n',
            icon: 'fa-star'
        }
    ];

    // Obtener el contenedor del menú
    const menuContainer = document.getElementById('directoriesMenu');

    // Generar elementos del menú dinámicamente
    directories.forEach(dir => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <i class="fas ${dir.icon} menu-icon"></i>
            <h3 class="menu-title">${dir.title}</h3>
            <p class="menu-description">${dir.description}</p>
        `;
        
        // Agregar evento para navegar al directorio al hacer clic
        menuItem.addEventListener('click', function() {
            window.location.href = `${dir.id}/index.html`;
        });
        
        menuContainer.appendChild(menuItem);
    });

    // Agregar botón "Volver al menú principal" a todas las páginas index.html de los subdirectorios
    if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
        // Estamos en una página de subdirectorio
        addReturnButton();
    }
});

// Función para agregar el botón de regreso al menú principal en cada subdirectorio
function addReturnButton() {
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
                background-color: var(--primary-color);
                color: white;
                padding: 10px 15px;
                border-radius: var(--border-radius);
                cursor: pointer;
                z-index: 100;
                box-shadow: var(--shadow);
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .return-btn:hover {
                background-color: var(--secondary-color);
            }
        `;
        document.head.appendChild(style);
    }
} 