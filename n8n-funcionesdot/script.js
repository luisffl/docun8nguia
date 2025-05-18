document.addEventListener('DOMContentLoaded', function() {
    // Elementos de interfaz
    const loadingElement = document.getElementById('loading');
    const methodsContainer = document.getElementById('methods-container');
    const noResultsElement = document.getElementById('no-results');

    // Mostrar cargando
    loadingElement.style.display = 'flex';
    methodsContainer.style.display = 'none';
    noResultsElement.style.display = 'none';

    // Cargar los datos del JSON de n8n
    fetch('n8n_built_in_methods.json')
        .then(response => response.json())
        .then(data => {
            // Extraer solo la sección de data_transformation_functions
            const transformationFunctions = {
                data_transformation_functions: data.data_transformation_functions
            };
            
            // Ocultar cargando
            loadingElement.style.display = 'none';
            methodsContainer.style.display = 'grid';
            
            initializeApp(transformationFunctions);
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
            
            // Ocultar cargando y mostrar contenedor
            loadingElement.style.display = 'none';
            methodsContainer.style.display = 'grid';
            
            // Usar datos de copia de seguridad en caso de error
            initializeApp({
                "data_transformation_functions": {
                    "arrays": {
                        "isEmpty()": {
                            "description": "Verifica si un array está vacío",
                            "parameters": {
                                "array": {
                                    "description": "Array a verificar",
                                    "type": "array",
                                    "optional": false
                                }
                            },
                            "return_type": "boolean"
                        },
                        "hasMin()": {
                            "description": "Verifica si un array tiene un mínimo de elementos",
                            "parameters": {
                                "array": {
                                    "description": "Array a verificar",
                                    "type": "array",
                                    "optional": false
                                },
                                "min": {
                                    "description": "Cantidad mínima de elementos",
                                    "type": "number",
                                    "optional": false
                                }
                            },
                            "return_type": "boolean"
                        }
                    },
                    "booleans": {},
                    "dates": {},
                    "numbers": {
                        "round()": {
                            "description": "Redondea un número",
                            "parameters": {
                                "number": {
                                    "description": "Número a redondear",
                                    "type": "number",
                                    "optional": false
                                },
                                "decimals": {
                                    "description": "Cantidad de decimales",
                                    "type": "number",
                                    "optional": true,
                                    "default": 0
                                }
                            },
                            "return_type": "number"
                        }
                    },
                    "objects": {
                        "isEmpty()": {
                            "description": "Verifica si un objeto está vacío",
                            "parameters": {
                                "obj": {
                                    "description": "Objeto a verificar",
                                    "type": "object",
                                    "optional": false
                                }
                            },
                            "return_type": "boolean"
                        },
                        "hasField()": {
                            "description": "Verifica si un objeto tiene un campo específico",
                            "parameters": {
                                "obj": {
                                    "description": "Objeto a verificar",
                                    "type": "object",
                                    "optional": false
                                },
                                "field": {
                                    "description": "Nombre del campo",
                                    "type": "string",
                                    "optional": false
                                }
                            },
                            "return_type": "boolean"
                        }
                    },
                    "strings": {
                        "base64Encode()": {
                            "description": "Codifica una cadena en base64",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "base64Decode()": {
                            "description": "Convierte una cadena codificada en base64 a una cadena normal",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "extractDomain()": {
                            "description": "Extrae un dominio de una cadena que contiene una URL válida",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "extractEmail()": {
                            "description": "Extrae un email de una cadena",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "extractUrl()": {
                            "description": "Extrae una URL de una cadena",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "extractUrlPath()": {
                            "description": "Extrae la ruta pero no el dominio raíz de una URL",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "hash()": {
                            "description": "Devuelve una cadena hasheada con el algoritmo especificado",
                            "parameters": {
                                "algo": {
                                    "description": "Algoritmo de hash a utilizar",
                                    "type": "string",
                                    "optional": true,
                                    "default": "md5",
                                    "enum": ["md5", "base64", "sha1", "sha224", "sha256", "sha384", "sha512", "sha3", "ripemd160"]
                                }
                            },
                            "return_type": "string"
                        },
                        "isDomain()": {
                            "description": "Verifica si una cadena es un dominio",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "isEmail()": {
                            "description": "Verifica si una cadena es un email",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "isEmpty()": {
                            "description": "Verifica si una cadena está vacía",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "isNotEmpty()": {
                            "description": "Verifica si una cadena tiene contenido",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "isNumeric()": {
                            "description": "Verifica si una cadena solo contiene dígitos",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "isUrl()": {
                            "description": "Verifica si una cadena es una URL válida",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "parseJson()": {
                            "description": "Analiza una cadena como un objeto JSON",
                            "parameters": {},
                            "return_type": "object"
                        },
                        "quote()": {
                            "description": "Devuelve una cadena envuelta en comillas",
                            "parameters": {
                                "mark": {
                                    "description": "Estilo de comillas a usar",
                                    "type": "string",
                                    "optional": true,
                                    "default": "\""
                                }
                            },
                            "return_type": "string"
                        },
                        "removeMarkdown()": {
                            "description": "Elimina el formato Markdown de una cadena",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "replaceSpecialChars()": {
                            "description": "Reemplaza caracteres no ASCII en una cadena con una representación ASCII",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "removeTags()": {
                            "description": "Elimina etiquetas HTML o XML de una cadena",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "toBoolean()": {
                            "description": "Convierte una cadena a booleano",
                            "parameters": {},
                            "return_type": "boolean"
                        },
                        "toDateTime()": {
                            "description": "Convierte una cadena a un objeto de fecha Luxon",
                            "parameters": {},
                            "return_type": "Date"
                        },
                        "toDecimalNumber()": {
                            "description": "Convierte una cadena a un número decimal",
                            "parameters": {},
                            "return_type": "number"
                        },
                        "toFloat()": {
                            "description": "Convierte una cadena a un número decimal",
                            "parameters": {},
                            "return_type": "number"
                        },
                        "toInt()": {
                            "description": "Convierte una cadena a un número entero",
                            "parameters": {},
                            "return_type": "number"
                        },
                        "toSentenceCase()": {
                            "description": "Formatea una cadena a formato de oración",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "toSnakeCase()": {
                            "description": "Formatea una cadena a formato snake case",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "toTitleCase()": {
                            "description": "Formatea una cadena a formato título",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "toWholeNumber()": {
                            "description": "Convierte una cadena a un número entero",
                            "parameters": {},
                            "return_type": "string"
                        },
                        "urlDecode()": {
                            "description": "Decodifica una cadena codificada para URL",
                            "parameters": {
                                "entireString": {
                                    "description": "Si se deben decodificar los caracteres que son parte de la sintaxis URI",
                                    "type": "boolean",
                                    "optional": true
                                }
                            },
                            "return_type": "string"
                        },
                        "urlEncode()": {
                            "description": "Codifica una cadena para ser usada en una URL",
                            "parameters": {
                                "entireString": {
                                    "description": "Si se deben codificar los caracteres que son parte de la sintaxis URI",
                                    "type": "boolean",
                                    "optional": true
                                }
                            },
                            "return_type": "string"
                        }
                    }
                }
            });
        });

    function initializeApp(n8nData) {
        // Mapeo de tipos de datos a iconos de Font Awesome
        const typeIcons = {
            'arrays': 'fa-list',
            'booleans': 'fa-toggle-on',
            'dates': 'fa-calendar-alt',
            'numbers': 'fa-hashtag',
            'objects': 'fa-cube',
            'strings': 'fa-font'
        };

        // Mapeo de tipos de datos a tipos específicos de parámetros
        const dataTypeIcons = {
            'array': 'fa-list',
            'boolean': 'fa-toggle-on',
            'Date': 'fa-calendar-alt',
            'number': 'fa-hashtag',
            'object': 'fa-cube',
            'string': 'fa-font',
            'function': 'fa-code',
            'any': 'fa-asterisk'
        };

        // Convertir nombres de categorías a nombres legibles
        const categoryNames = {
            'arrays': 'Arrays',
            'booleans': 'Booleans',
            'dates': 'Dates',
            'numbers': 'Numbers',
            'objects': 'Objects',
            'strings': 'Strings'
        };

        // Lista de funciones de Strings recomendadas por el editor de n8n
        const recommendedStrings = new Set([
            'includes()', 'split()', 'startsWith()', 'replaceAll()', 'length',
            'base64Decode()', 'base64Encode()', 'concat()', 'extractDomain()',
            'extractEmail()', 'extractUrl()', 'extractUrlPath()', 'hash()',
            'quote()', 'removeMarkdown()', 'removeTags()', 'replace()',
            'replaceAll()', 'replaceSpecialChars()', 'slice()', 'substring()',
            'toJsonString()', 'trim()', 'trimEnd()', 'trimStart()', 'urlDecode()',
            'urlEncode()', 'endsWith()', 'indexOf()', 'match()', 'search()',
            'isDomain()', 'isEmail()', 'isEmpty()', 'isNotEmpty()', 'isNumeric()',
            'isUrl()', 'toLowerCase()', 'toSentenceCase()', 'toSnakeCase()',
            'toTitleCase()', 'toUpperCase()', 'parseJson()', 'toBoolean()',
            'toDateTime()', 'toNumber()'
        ]);

        // Lista de funciones de Numbers recomendadas
        const recommendedNumbers = new Set([
            'isEven()', 'isOdd()'
        ]);

        // Lista de funciones de Arrays recomendadas
        const recommendedArrays = new Set(['length', 'last()', 'includes()', 'map()', 'filter()']);

        // Lista de funciones de Objects recomendadas
        const recommendedObjects = new Set(['keys()', 'values()', 'isEmpty()', 'hasField()']);

        // Lista de funciones de Booleans recomendadas
        const recommendedBooleans = new Set(['toNumber()', 'toString()']);

        // Contenedor de filtros
        const categoryFilterContainer = document.getElementById('category-filter');

        // Token para cancelar renders incrementales en curso
        let renderToken = 0;

        // Función que crea los botones de filtro dinámicamente según las categorías disponibles
        function createCategoryButtons() {
            if (!categoryFilterContainer) return;

            // Limpiar contenido previo (por si se re-inicializa)
            categoryFilterContainer.innerHTML = '';

            // Botón "Todos"
            const allBtn = document.createElement('button');
            allBtn.className = 'filter-btn active';
            allBtn.dataset.category = 'all';
            allBtn.textContent = 'Todos';
            categoryFilterContainer.appendChild(allBtn);

            // Botones por cada categoría detectada en el JSON
            const categories = Object.keys(n8nData.data_transformation_functions);
            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                btn.dataset.category = cat;
                btn.textContent = categoryNames[cat] || cat;
                categoryFilterContainer.appendChild(btn);
            });
        }

        // Crear botones antes de renderizar tarjetas o asignar eventos
        createCategoryButtons();

        const recommendedCheckbox = document.getElementById('recommended-checkbox');

        // Función para aplicar filtros: recrea tarjetas y filtra
        function applyFilters() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();

            // Mostrar spinner y ocultar contenedor durante la carga
            loadingElement.style.display = 'flex';
            methodsContainer.style.display = 'none';
            noResultsElement.style.display = 'none';

            generateMethodCards(() => {
                // Ocultar spinner y mostrar contenedor
                loadingElement.style.display = 'none';
                methodsContainer.style.display = 'grid';

                filterBySearch(searchTerm);
            });
        }

        // Escuchar cambios del checkbox para aplicar filtros
        if (recommendedCheckbox) {
            recommendedCheckbox.addEventListener('change', applyFilters);
        }

        // Función para generar las tarjetas de métodos
        function generateMethodCards(doneCallback) {
            methodsContainer.innerHTML = ''; // Limpiar contenedor
            const currentToken = ++renderToken;
            const transformations = n8nData.data_transformation_functions;

            // Preparar cola de métodos
            const queue = [];
            for (const category in transformations) {
                for (const methodName in transformations[category]) {
                    queue.push({ category, methodName });
                }
            }

            let index = 0;

            function renderNext() {
                if (currentToken !== renderToken) return; // Cancelado por nueva generación
                if (index >= queue.length) {
                    if (currentToken !== renderToken) return;
                    if (typeof doneCallback === 'function') doneCallback();
                    return;
                }

                const { category, methodName } = queue[index];
                const method = transformations[category][methodName];

                const card = document.createElement('div');
                card.className = `method-card ${category}`;
                card.dataset.category = category;

                // Marcar recomendadas
                if (
                    (category === 'strings' && recommendedStrings.has(methodName)) ||
                    (category === 'numbers' && recommendedNumbers.has(methodName)) ||
                    (category === 'arrays' && recommendedArrays.has(methodName)) ||
                    (category === 'objects' && recommendedObjects.has(methodName)) ||
                    (category === 'booleans' && recommendedBooleans.has(methodName))
                ) {
                    card.dataset.recommended = 'true';
                }

                // Animación escalonada
                card.style.animationDelay = `${index * 0.03}s`;

                // Cabecera
                const cardHeader = document.createElement('div');
                cardHeader.className = 'card-header';

                const methodNameElement = document.createElement('div');
                methodNameElement.className = 'method-name';
                methodNameElement.innerHTML = `<i class="fas ${typeIcons[category]}"></i> ${methodName}`;
                cardHeader.appendChild(methodNameElement);

                const methodTypeElement = document.createElement('div');
                methodTypeElement.className = 'method-type-label';
                methodTypeElement.textContent = methodName.includes('(') ? 'VARIABLE' : 'ATRIBUTO';
                cardHeader.appendChild(methodTypeElement);

                card.appendChild(cardHeader);

                // Cuerpo
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'method-description';
                descriptionElement.textContent = method.description;
                cardBody.appendChild(descriptionElement);

                // Ejemplo (utilizamos lógica existente llamando helper)
                if (method.example) {
                    // reutilizamos código existente copiando de antes (simplificado)
                    const exampleSection = document.createElement('div');
                    exampleSection.className = 'example-section';
                    const exampleLabel = document.createElement('div');
                    exampleLabel.className = 'example-label';
                    exampleLabel.textContent = 'Ejemplo:';
                    exampleSection.appendChild(exampleLabel);
                    const codeBlock = document.createElement('div');
                    codeBlock.className = 'code-block';
                    method.example.split('\n').forEach(line => {
                        const lineEl = document.createElement('div');
                        if (line.startsWith('//')) lineEl.className = 'code-comment';
                        else if (line.startsWith('{{')) lineEl.className = 'code-expression';
                        else if (line.toLowerCase().includes('resultado:')) lineEl.className = 'code-result';
                        lineEl.textContent = line;
                        codeBlock.appendChild(lineEl);
                    });
                    exampleSection.appendChild(codeBlock);
                    cardBody.appendChild(exampleSection);
                }

                // Parámetros y retorno (copiamos simplificado: mostrar solo tipo de retorno para velocidad)
                const returnTypeElement = document.createElement('div');
                returnTypeElement.className = 'return-type';
                returnTypeElement.innerHTML = `Retorna: <span><i class="fas ${dataTypeIcons[method.return_type] || 'fa-question'}"></i> ${method.return_type}</span>`;
                cardBody.appendChild(returnTypeElement);

                card.appendChild(cardBody);

                methodsContainer.appendChild(card);

                index++;
                requestAnimationFrame(renderNext);
            }

            renderNext();
        }

        // Generar las tarjetas inicialmente y aplicar primer filtrado (vacío)
        generateMethodCards();
        filterBySearch('');

        // Funcionalidad de filtrado por categoría (después de crear botones)
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Marcar botón activo
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Reaplicar filtros (categoría + búsqueda + checkbox)
                applyFilters();
            });
        });

        // Funcionalidad de búsqueda
        function filterBySearch(searchTerm) {
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
            const cards = document.querySelectorAll('.method-card');
            
            cards.forEach(card => {
                const methodName = card.querySelector('.method-name').textContent.toLowerCase();
                const description = card.querySelector('.method-description').textContent.toLowerCase();
                const category = card.dataset.category;
                
                // Verificar si coincide con la búsqueda y la categoría filtrada
                const matchesSearch = methodName.includes(searchTerm) || description.includes(searchTerm);
                const recommendedOnly = recommendedCheckbox ? recommendedCheckbox.checked : false;
                const matchesCategory = activeCategory === 'all' || category === activeCategory;
                const matchesRecommended = !recommendedOnly || card.dataset.recommended === 'true';
                
                if (matchesSearch && matchesCategory && matchesRecommended) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Comprobamos si hay tarjetas visibles
            checkVisibleCards();
        }

        // Comprobar si hay tarjetas visibles y mostrar mensaje si no hay
        function checkVisibleCards() {
            const cards = document.querySelectorAll('.method-card');
            const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
            if (visibleCards.length === 0 && methodsContainer.childElementCount > 0) {
                noResultsElement.style.display = 'flex';
            } else {
                noResultsElement.style.display = 'none';
            }
        }

        document.getElementById('search-input').addEventListener('input', function() {
            applyFilters();
        });
    }
}); 
