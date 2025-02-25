# 🧮 Two Sum Visualizer - Algoritmo Interactivo

Un visualizador interactivo y moderno para el algoritmo "Two Sum", que permite entender paso a paso cómo funciona este popular problema de programación con animaciones atractivas.

## 📱 Imágenes de la Aplicación 📱

![Two Sum Visualizer](https://img.icons8.com/fluency/96/null/code.png)

## ✨ Características

- 🔍 Visualización paso a paso del algoritmo Two Sum
- 📊 Visualización en tiempo real del proceso de búsqueda
- 🧠 Implementación de dos soluciones (O(n) y O(n²))
- 📱 Diseño responsive adaptable a todos los dispositivos
- 🎬 Controles de reproducción (paso a paso y automático)
- 🌓 Diseño moderno con colores atractivos
- 📋 Ejemplos predefinidos para pruebas rápidas
- 📝 Explicación detallada de cada paso del algoritmo
- 🏆 Destacado visual de la solución encontrada
- 🔄 Función de reinicio para probar diferentes casos

## 🛠️ Tecnologías utilizadas

- 💻 HTML5, CSS3 y JavaScript (ES6+)
- 🎨 CSS avanzado (gradientes, animaciones, transiciones)
- 📱 Diseño responsivo con media queries
- 🎭 JavaScript para animaciones y lógica
- 🐍 Python para implementaciones del algoritmo
- 🌈 Estilos modernos con variables CSS

## ✨ Efectos y Animaciones

- 🌊 Gradientes lineales para botones principales y títulos
- 💫 Animación fadeIn para la entrada de tarjetas en la carga de la página
- 🔄 Animación pulsante para el nombre en el footer
- 👆 Efectos de escala y cambio de color en iconos sociales al pasar el cursor
- 🔍 Cambio de color y escala para elementos del array durante la visualización
- 📊 Transiciones suaves (0.3s) para todos los elementos interactivos
- 🌈 Resaltado con colores distintos para cada tipo de paso en el algoritmo
- 🔆 Efecto de opacidad y escala para destacar la solución final encontrada
- 👆 Efecto de elevación (transform y box-shadow) en botones al pasar el cursor
- 💎 Efectos de profundidad con sombras en tarjetas principales

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Lizzy0981/TwoSum-Visualizer.git
```

2. Abre el archivo index.html en tu navegador o usa un servidor local como Live Server de VSCode.

3. También puedes acceder a la versión desplegada [aquí](https://two-sum-visualizer.vercel.app/).

## 💡 Uso

1. Ingresa un array de números separados por comas en el campo "Array de números".
2. Ingresa el valor objetivo en el campo "Target".
3. Haz clic en "Encontrar solución" para iniciar la visualización.
4. Utiliza los controles "Siguiente paso" o "Auto" para ver la ejecución del algoritmo.
5. Observa cómo el algoritmo encuentra los dos números que suman el target.
6. Revisa la explicación detallada de cada paso en la sección inferior.

## 📝 Descripción del problema

**Two Sum** es un problema clásico de algoritmos que consiste en:

> Dado un array de enteros `nums` y un entero `target`, encontrar los índices de los dos números que suman `target`.
> 
> - Cada entrada tendrá exactamente una solución.
> - No puedes usar el mismo número dos veces.
> - Puedes devolver la respuesta en cualquier orden.

### Ejemplos:

- **Entrada:** nums = [2,7,11,15], target = 9  
  **Salida:** [0,1] (porque nums[0] + nums[1] = 2 + 7 = 9)

- **Entrada:** nums = [3,2,4], target = 6  
  **Salida:** [1,2] (porque nums[1] + nums[2] = 2 + 4 = 6)

## 💡 Soluciones implementadas

El proyecto incluye dos soluciones diferentes en Python:

1. **Solución optimizada (O(n))**: Utiliza un hash map (diccionario) para encontrar la solución en una sola pasada.
2. **Solución de fuerza bruta (O(n²))**: Utiliza dos bucles anidados para comparar cada par posible de números.

## 🗂️ Estructura del proyecto

```
two-sum-challenge/
│
├── index.html          # Página principal con el visualizador interactivo
├── styles.css          # Estilos CSS para la interfaz y animaciones
├── script.js           # Lógica JavaScript para la visualización y animaciones
├── vercel.json         # Configuración para despliegue en Vercel
├── python/
│   ├── two_sum.py      # Solución optimizada del algoritmo O(n)
│   └── two_sum_brute_force.py  # Solución de fuerza bruta O(n²)
└── README.md           # Documentación del proyecto
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👩‍💻 Créditos

Desarrollado con 💜 por Elizabeth Diaz Familia
- 🐱 [GitHub](https://github.com/Lizzy0981)
- 💼 [LinkedIn](https://linkedin.com/in/eli-familia/)
- 🐦 [Twitter](https://twitter.com/Lizzyfamilia)
  
## 🙏 Agradecimientos

- 🎓 Oracle Next Education por el apoyo educativo
- 🚀 Alura Latam por la formación y los desafíos
- 👨‍🏫 A los creadores del desafío Two Sum por su aporte a la comunidad
- 🌟 A todos los usuarios que utilizan esta herramienta para aprender