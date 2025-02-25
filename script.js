document.addEventListener('DOMContentLoaded', function() {
    // Actualizar el año en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Elementos del DOM
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const nextBtn = document.getElementById('next-btn');
    const autoBtn = document.getElementById('auto-btn');
    const arrayInput = document.getElementById('array-input');
    const targetInput = document.getElementById('target-input');
    const resultMessage = document.getElementById('result-message');
    const arrayDisplay = document.getElementById('array-display');
    const stepsUl = document.getElementById('steps');
    const exampleBtns = document.querySelectorAll('.example-btn');
    
    // Variables para la animación
    let animationSteps = [];
    let currentStep = -1;
    let autoPlayInterval = null;
    
    // Eventos para los botones de ejemplo
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            arrayInput.value = this.getAttribute('data-array');
            targetInput.value = this.getAttribute('data-target');
        });
    });
    
    // Evento para calcular
    calculateBtn.addEventListener('click', function() {
        startVisualization();
    });
    
    // Evento para reiniciar
    resetBtn.addEventListener('click', function() {
        resetVisualization();
    });
    
    // Evento para el siguiente paso
    nextBtn.addEventListener('click', function() {
        showNextStep();
    });
    
    // Evento para reproducción automática
    autoBtn.addEventListener('click', function() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            autoBtn.textContent = 'Auto';
        } else {
            autoBtn.textContent = 'Detener';
            autoPlayInterval = setInterval(showNextStep, 1000);
        }
    });
    
    // Función para iniciar la visualización
    function startVisualization() {
        // Detener animación anterior si existe
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            autoBtn.textContent = 'Auto';
        }
        
        // Obtener y validar inputs
        const inputArray = arrayInput.value.split(',').map(item => parseInt(item.trim()));
        const target = parseInt(targetInput.value);
        
        if (inputArray.some(isNaN) || isNaN(target)) {
            resultMessage.innerHTML = 'Por favor, ingresa valores numéricos válidos.';
            resultMessage.style.color = '#f72585';
            return;
        }
        
        // Reiniciar visualización
        resetVisualization();
        
        // Mostrar array
        inputArray.forEach((num, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'array-item';
            itemDiv.id = `item-${index}`;
            itemDiv.innerHTML = `
                <span class="index">${index}</span>
                ${num}
            `;
            arrayDisplay.appendChild(itemDiv);
        });
        
        // Generar pasos de animación
        generateAnimationSteps(inputArray, target);
        
        // Activar controles
        nextBtn.disabled = false;
        resultMessage.textContent = 'Visualización lista. Presiona "Siguiente paso" o "Auto" para comenzar.';
    }
    
    // Función Two Sum que devuelve la solución y registra los pasos
    function twoSum(nums, target) {
        const numMap = {};
        const steps = [];
        
        // Paso inicial
        steps.push({
            type: 'init',
            message: `Buscando dos números que sumen ${target} en el array [${nums.join(', ')}]`,
            highlight: null
        });
        
        // Recorrer el array
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            
            // Paso: evaluando el número actual
            steps.push({
                type: 'process',
                message: `Paso ${i + 1}: Evaluando nums[${i}] = ${nums[i]}`,
                highlight: i,
                processed: Array.from({ length: i }, (_, idx) => idx)
            });
            
            // Paso: calculando complemento
            steps.push({
                type: 'calc',
                message: `Calculando complemento: ${target} - ${nums[i]} = ${complement}`,
                highlight: i,
                processed: Array.from({ length: i }, (_, idx) => idx)
            });
            
            // Verificar si el complemento existe en el mapa
            if (numMap[complement] !== undefined) {
                // Paso: encontró solución
                steps.push({
                    type: 'found',
                    message: `¡Encontrado! El complemento ${complement} está en la posición ${numMap[complement]}`,
                    highlight: i,
                    solution: [numMap[complement], i],
                    processed: Array.from({ length: i }, (_, idx) => idx)
                });
                
                // Paso: solución final
                steps.push({
                    type: 'solution',
                    message: `Solución: [${numMap[complement]}, ${i}] porque ${nums[numMap[complement]]} + ${nums[i]} = ${target}`,
                    highlight: i,
                    solution: [numMap[complement], i],
                    processed: Array.from({ length: i }, (_, idx) => idx)
                });
                
                return {
                    solution: [numMap[complement], i],
                    steps: steps
                };
            }
            
            // Paso: guardar en el mapa
            steps.push({
                type: 'store',
                message: `Guardando ${nums[i]} (en posición ${i}) en el diccionario`,
                highlight: i,
                processed: Array.from({ length: i + 1 }, (_, idx) => idx)
            });
            
            numMap[nums[i]] = i;
        }
        
        // No se encontró solución
        steps.push({
            type: 'notfound',
            message: 'No se encontró una solución válida.',
            highlight: null,
            processed: Array.from({ length: nums.length }, (_, idx) => idx)
        });
        
        return {
            solution: [],
            steps: steps
        };
    }
    
    // Generar pasos de animación
    function generateAnimationSteps(nums, target) {
        // Ejecutar el algoritmo Two Sum real
        const result = twoSum(nums, target);
        
        // Guardar los pasos para la animación
        animationSteps = result.steps;
    }
    
    // Mostrar siguiente paso
    function showNextStep() {
        if (currentStep < animationSteps.length - 1) {
            currentStep++;
            const step = animationSteps[currentStep];
            
            // Actualizar visualización del array
            document.querySelectorAll('.array-item').forEach(item => {
                item.classList.remove('selected', 'processed');
            });
            
            // Actualizar elementos procesados
            if (step.processed) {
                step.processed.forEach(idx => {
                    const item = document.getElementById(`item-${idx}`);
                    if (item) item.classList.add('processed');
                });
            }
            
            // Resaltar el elemento actual
            if (step.highlight !== null) {
                const highlightItem = document.getElementById(`item-${step.highlight}`);
                if (highlightItem) highlightItem.classList.add('selected');
            }
            
            // Resaltar elementos de la solución
            if (step.solution) {
                step.solution.forEach(idx => {
                    const item = document.getElementById(`item-${idx}`);
                    if (item) item.classList.add('selected');
                });
            }
            
            // Añadir paso al historial
            const li = document.createElement('li');
            li.textContent = step.message;
            
            // Estilo según el tipo de paso
            if (step.type === 'found' || step.type === 'solution') {
                li.classList.add('solution');
            } else if (step.type === 'calc' || step.type === 'store') {
                li.classList.add('highlight');
            }
            
            stepsUl.appendChild(li);
            li.scrollIntoView({ behavior: 'smooth' });
            
            // Actualizar mensaje de resultado para la solución final
            if (step.type === 'solution') {
                resultMessage.innerHTML = `¡Solución encontrada! <strong>[${step.solution.join(', ')}]</strong>`;
                // Destacar visualmente el resultado final
                document.querySelectorAll('.array-item').forEach(item => {
                    item.style.opacity = '0.5';
                });
                step.solution.forEach(idx => {
                    const item = document.getElementById(`item-${idx}`);
                    if (item) {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1.2)';
                        item.style.boxShadow = '0 8px 25px rgba(247, 37, 133, 0.4)';
                    }
                });
            } else if (step.type === 'notfound') {
                resultMessage.textContent = 'No se encontró una solución válida.';
            }
        } else {
            // Detener reproducción automática cuando se terminan los pasos
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
                autoBtn.textContent = 'Auto';
            }
        }
    }
    
    // Reiniciar visualización
    function resetVisualization() {
        stepsUl.innerHTML = '<li>La visualización mostrará los pasos del algoritmo aquí.</li>';
        arrayDisplay.innerHTML = '';
        resultMessage.textContent = 'Presiona "Encontrar solución" para iniciar la visualización';
        currentStep = -1;
        animationSteps = [];
        nextBtn.disabled = true;
        
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            autoBtn.textContent = 'Auto';
        }
    }
});