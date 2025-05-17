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
            'includes()', 'split()', 'startsWith()', 'replaceAll()',
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

        // Contenedor de filtros
        const categoryFilterContainer = document.getElementById('category-filter');

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

        // Escuchar cambios del checkbox para aplicar filtros
        if (recommendedCheckbox) {
            recommendedCheckbox.addEventListener('change', () => {
                const searchTerm = document.getElementById('search-input').value.toLowerCase();
                filterBySearch(searchTerm);
            });
        }

        // Función para generar las tarjetas de métodos
        function generateMethodCards() {
            methodsContainer.innerHTML = ''; // Limpiar contenedor
            const transformations = n8nData.data_transformation_functions;
            let cardCount = 0;

            for (const category in transformations) {
                const methods = transformations[category];

                for (const methodName in methods) {
                    cardCount++;
                    const method = methods[methodName];
                    const card = document.createElement('div');
                    card.className = `method-card ${category}`;
                    card.dataset.category = category;

                    // Marcar como recomendado si aplica (strings o numbers)
                    if (
                        (category === 'strings' && recommendedStrings.has(methodName)) ||
                        (category === 'numbers' && recommendedNumbers.has(methodName)) ||
                        (category === 'arrays' && recommendedArrays.has(methodName)) ||
                        (category === 'objects' && recommendedObjects.has(methodName))
                    ) {
                        card.dataset.recommended = 'true';
                    }

                    // Agregar un retraso de animación basado en el índice para un efecto escalonado
                    card.style.animationDelay = `${cardCount * 0.05}s`;

                    // Cabecera de la tarjeta
                    const cardHeader = document.createElement('div');
                    cardHeader.className = 'card-header';
                    
                    // Nombre del método con icono
                    const methodNameElement = document.createElement('div');
                    methodNameElement.className = 'method-name';
                    methodNameElement.innerHTML = `<i class="fas ${typeIcons[category]}"></i> ${methodName}`;
                    cardHeader.appendChild(methodNameElement);
                    
                    // Etiqueta tipo variable
                    const methodTypeElement = document.createElement('div');
                    methodTypeElement.className = 'method-type-label';
                    if (!methodName.includes('(')) {
                        methodTypeElement.textContent = 'ATRIBUTO';
                    }
                    cardHeader.appendChild(methodTypeElement);
                    
                    card.appendChild(cardHeader);

                    // Cuerpo de la tarjeta
                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body';
                    
                    // Descripción
                    const descriptionElement = document.createElement('div');
                    descriptionElement.className = 'method-description';
                    descriptionElement.textContent = method.description;
                    cardBody.appendChild(descriptionElement);
                    
                    // Sección de ejemplo si existe
                    if (method.example) {
                        const exampleSection = document.createElement('div');
                        exampleSection.className = 'example-section';
                        
                        const exampleLabel = document.createElement('div');
                        exampleLabel.className = 'example-label';
                        exampleLabel.textContent = 'Ejemplo:';
                        exampleSection.appendChild(exampleLabel);
                        
                        const codeBlock = document.createElement('div');
                        codeBlock.className = 'code-block';
                        
                        // Parsear el ejemplo en líneas
                        const exampleLines = method.example.split('\n');
                        
                        // Verificar si ya existe un comentario con valor inicial
                        let hasInitialValueComment = exampleLines.some(line => 
                            line.toLowerCase().includes('dato inicial') || 
                            line.toLowerCase().includes('valor inicial') ||
                            line.toLowerCase().includes('objeto inicial'));
                            
                        if (!hasInitialValueComment) {
                            // Analizar el ejemplo para identificar variables y valores
                            let initialValues = {};
                            let expressionLine = '';
                            let resultLine = '';
                            
                            // Primero encontrar la expresión y el resultado
                            exampleLines.forEach(line => {
                                if (line.startsWith('{{')) {
                                    expressionLine = line.trim();
                                } else if (line.toLowerCase().includes('resultado:')) {
                                    resultLine = line.trim();
                                }
                            });
                            
                            if (expressionLine && resultLine) {
                                // Extraer la variable principal y el resultado
                                const match = expressionLine.match(/\{\{\s*(\$[a-zA-Z0-9_.]+)/);
                                let result = resultLine.split('Resultado:')[1]?.trim() || resultLine.split('resultado:')[1]?.trim() || '';
                                
                                // Eliminar comillas si existen
                                if (result.startsWith('"') && result.endsWith('"')) {
                                    result = result.substring(1, result.length - 1);
                                }
                                
                                if (match && match[1]) {
                                    const fullVariablePath = match[1];
                                    const mainVar = fullVariablePath.split('.')[0]; // Ej: $json
                                    
                                    // Generar un valor inicial contextual basado en el método y resultado
                                    let initialComment = '';
                                    
                                    // Método para deducir valores iniciales basados en el método y resultado
                                    if (methodName.includes('abs()') && fullVariablePath.includes('temperature')) {
                                        // Si es abs() y el resultado es positivo, el valor inicial podría ser negativo
                                        initialComment = `// Valor inicial: ${fullVariablePath} = -${result}`;
                                    }
                                    else if (methodName.includes('round(') && fullVariablePath.includes('average')) {
                                        // Para round, proporcionar un valor con decimales
                                        initialComment = `// Valor inicial: ${fullVariablePath} = 3.14159`;
                                    }
                                    else if (methodName.includes('ceil()') && fullVariablePath.includes('price')) {
                                        // Para ceil, el valor debería ser un decimal menor que el resultado
                                        const numResult = parseFloat(result);
                                        initialComment = `// Valor inicial: ${fullVariablePath} = ${(numResult - 0.25).toFixed(2)}`;
                                    }
                                    else if (methodName.includes('floor()') && fullVariablePath.includes('rating')) {
                                        // Para floor, el valor debería ser un decimal mayor que el resultado
                                        const numResult = parseFloat(result);
                                        initialComment = `// Valor inicial: ${fullVariablePath} = ${(numResult + 0.8).toFixed(1)}`;
                                    }
                                    else if (methodName.includes('isEven()') && result === 'true') {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = 2`;
                                    }
                                    else if (methodName.includes('isOdd()') && result === 'true') {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = 3`;
                                    }
                                    else if (methodName.includes('format(') && fullVariablePath.includes('price')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = 1234.5`;
                                    }
                                    else if (methodName.includes('clamp(') && fullVariablePath.includes('volume')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = 75`;
                                    }
                                    else if (methodName.includes('toISOString()')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = new Date("2023-10-15T14:30:45.123Z")`;
                                    }
                                    else if (methodName.includes('diff(') && fullVariablePath.includes('endTime')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = new Date("2023-10-15T15:00:00Z")\n// Valor inicial: $json.startTime = new Date("2023-10-15T10:00:00Z")`;
                                    }
                                    else if (methodName.includes('subtract(') && fullVariablePath.includes('deliveryDate')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = new Date("2023-10-15T10:00:00Z")`;
                                    }
                                    else if (methodName.includes('toTimestamp()')) {
                                        initialComment = `// Valor inicial: ${fullVariablePath} = new Date("2023-10-15T10:00:00Z")`;
                                    }
                                    else if (mainVar === '$json') {
                                        // Determinar un valor contextual basado en la propiedad accedida
                                        const propPath = fullVariablePath.split('.').slice(1).join('.');
                                        if (propPath) {
                                            initialComment = `// Valor inicial: $json = { "${propPath}": ${typeof result === 'string' ? `"${result}"` : result} }`;
                                        } else {
                                            initialComment = `// Valor inicial: $json = { "data": { "id": 1, "name": "Demo" } }`;
                                        }
                                    }
                                    else if (mainVar === '$input') {
                                        if (fullVariablePath.includes('first()') || fullVariablePath.includes('last()') || fullVariablePath.includes('all()')) {
                                            // Si accede a first, last o all, crear un array de ejemplo
                                            const prop = expressionLine.match(/json\.([a-zA-Z0-9_]+)/);
                                            if (prop && prop[1]) {
                                                initialComment = `// Valor inicial: $input = [ { "json": { "${prop[1]}": ${typeof result === 'string' ? `"${result}"` : result} } } ]`;
                                            } else {
                                                initialComment = `// Valor inicial: $input = [ { "json": { "id": 123, "email": "ejemplo@correo.com" } } ]`;
                                            }
                                        } else if (fullVariablePath.includes('item')) {
                                            const prop = expressionLine.match(/json\.([a-zA-Z0-9_]+)/);
                                            if (prop && prop[1]) {
                                                initialComment = `// Valor inicial: $input.item = { "json": { "${prop[1]}": ${typeof result === 'string' ? `"${result}"` : result} } }`;
                                            } else {
                                                initialComment = `// Valor inicial: $input.item = { "json": { "name": "Demo" } }`;
                                            }
                                        } else if (fullVariablePath.includes('params')) {
                                            const prop = expressionLine.match(/params\.([a-zA-Z0-9_]+)/);
                                            if (prop && prop[1]) {
                                                initialComment = `// Valor inicial: $input.params = { "${prop[1]}": ${typeof result === 'string' ? `"${result}"` : result} }`;
                                            } else {
                                                initialComment = `// Valor inicial: $input.params = { "resource": "users" }`;
                                            }
                                        }
                                    }
                                    else if (mainVar === '$now') {
                                        initialComment = `// Valor inicial: $now = new Date("2023-10-15T14:30:45.123Z")`;
                                    }
                                    else if (mainVar === '$today') {
                                        initialComment = `// Valor inicial: $today = new Date("2023-10-15T00:00:00.000Z")`;
                                    }
                                    else if (mainVar.startsWith('$(') || mainVar.startsWith('$(\'')) {
                                        // Node reference
                                        const nodeName = mainVar.match(/\$\(([^)]+)\)/) || mainVar.match(/\$\('([^']+)'\)/);
                                        if (nodeName && nodeName[1]) {
                                            const prop = expressionLine.match(/json\.([a-zA-Z0-9_]+)/);
                                            if (prop && prop[1]) {
                                                initialComment = `// Valor inicial: $(${nodeName[1]}) = { "json": { "${prop[1]}": ${typeof result === 'string' ? `"${result}"` : result} } }`;
                                            } else {
                                                initialComment = `// Valor inicial: $(${nodeName[1]}) = { "json": { "data": { "id": 1, "name": "Producto" } } }`;
                                            }
                                        }
                                    }
                                    else {
                                        initialComment = `// Valor inicial: ${mainVar} = { ... }`;
                                    }
                                    
                                    // Agregar el comentario al principio de las líneas
                                    if (initialComment) {
                                        exampleLines.unshift(initialComment);
                                    }
                                }
                            }
                        }
                        
                        // Crear elementos para cada línea
                        exampleLines.forEach(line => {
                            const lineElement = document.createElement('div');
                            
                            if (line.startsWith('//')) {
                                lineElement.className = 'code-comment';
                                lineElement.textContent = line;
                            } else if (line.startsWith('{{')) {
                                lineElement.className = 'code-expression';
                                lineElement.textContent = line;
                            } else if (line.toLowerCase().includes('resultado:')) {
                                lineElement.className = 'code-result';
                                lineElement.textContent = line;
                            } else {
                                lineElement.textContent = line;
                            }
                            
                            codeBlock.appendChild(lineElement);
                        });
                        
                        exampleSection.appendChild(codeBlock);
                        cardBody.appendChild(exampleSection);
                    }
                    
                    // Sección de parámetros
                    if (Object.keys(method.parameters).length > 0) {
                        const paramSection = document.createElement('div');
                        paramSection.className = 'parameter-section';
                        
                        const parametersTitle = document.createElement('div');
                        parametersTitle.className = 'parameters-title';
                        parametersTitle.textContent = 'Parámetros:';
                        paramSection.appendChild(parametersTitle);
                        
                        for (const paramName in method.parameters) {
                            const param = method.parameters[paramName];
                            const paramElement = document.createElement('div');
                            paramElement.className = 'parameter';
                            
                            // Nombre y tipo del parámetro
                            const paramNameElement = document.createElement('div');
                            paramNameElement.className = 'parameter-name';
                            
                            const paramNameText = document.createElement('span');
                            paramNameText.textContent = paramName;
                            paramNameElement.appendChild(paramNameText);
                            
                            const paramTypeWrap = document.createElement('div');
                            
                            if (param.type) {
                                const paramTypeElement = document.createElement('span');
                                paramTypeElement.className = 'parameter-type';
                                paramTypeElement.innerHTML = `<i class="fas ${dataTypeIcons[param.type] || 'fa-question'}"></i> ${param.type}`;
                                paramTypeWrap.appendChild(paramTypeElement);
                            }
                            
                            if (param.optional) {
                                const paramOptionalElement = document.createElement('span');
                                paramOptionalElement.className = 'parameter-optional';
                                paramOptionalElement.textContent = 'opcional';
                                paramTypeWrap.appendChild(paramOptionalElement);
                            }
                            
                            paramNameElement.appendChild(paramTypeWrap);
                            paramElement.appendChild(paramNameElement);
                            
                            // Descripción del parámetro
                            if (param.description) {
                                const paramDescElement = document.createElement('div');
                                paramDescElement.className = 'parameter-description';
                                paramDescElement.textContent = param.description;
                                paramElement.appendChild(paramDescElement);
                            }
                            
                            // Valor por defecto si existe
                            if (param.default !== undefined) {
                                const paramDefaultElement = document.createElement('div');
                                paramDefaultElement.className = 'parameter-default';
                                paramDefaultElement.textContent = `Por defecto: ${param.default}`;
                                paramElement.appendChild(paramDefaultElement);
                            }
                            
                            paramSection.appendChild(paramElement);
                        }
                        
                        // Tipo de retorno
                        const returnTypeElement = document.createElement('div');
                        returnTypeElement.className = 'return-type';
                        returnTypeElement.innerHTML = `Retorna: <span><i class="fas ${dataTypeIcons[method.return_type] || 'fa-question'}"></i> ${method.return_type}</span>`;
                        paramSection.appendChild(returnTypeElement);
                        
                        cardBody.appendChild(paramSection);
                    } else {
                        // Si no hay parámetros, solo mostrar el tipo de retorno
                        const paramSection = document.createElement('div');
                        paramSection.className = 'parameter-section';
                        
                        const noParamsElement = document.createElement('div');
                        noParamsElement.className = 'no-params';
                        noParamsElement.textContent = 'No requiere parámetros';
                        paramSection.appendChild(noParamsElement);
                        
                        const returnTypeElement = document.createElement('div');
                        returnTypeElement.className = 'return-type';
                        returnTypeElement.innerHTML = `Retorna: <span><i class="fas ${dataTypeIcons[method.return_type] || 'fa-question'}"></i> ${method.return_type}</span>`;
                        paramSection.appendChild(returnTypeElement);
                        
                        cardBody.appendChild(paramSection);
                    }
                    
                    card.appendChild(cardBody);
                    methodsContainer.appendChild(card);
                }
            }

            // No establecemos visibilidad aquí; se hará en el primer filtrado global
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
                const searchTerm = document.getElementById('search-input').value.toLowerCase();
                filterBySearch(searchTerm);
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
            const searchTerm = this.value.toLowerCase();
            filterBySearch(searchTerm);
        });
    }
}); 