# TP Final React - PokemApp

## 🎯 Objetivo
Este proyecto es el trabajo práctico final del curso de **Programación Web Inicial - Front End Developer**.  
La aplicación demuestra la capacidad de diseñar, estructurar y desarrollar una **app web completa utilizando React**, aplicando conceptos como:

- Componentes reutilizables
- Enrutamiento con React Router DOM
- Consumo de APIs externas
- Manejo de estado local
- Diseño responsivo

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- JavaScript (ES6+)
- CSS3
- [PokeAPI](https://pokeapi.co/) para obtener datos de Pokémon


## 🌐 Funcionalidades

### 1️⃣ Home
- Página informativa sobre el proyecto.
- Incluye texto e imágenes

### 2️⃣ Listado de Pokémon
- Consume la **PokeAPI** y muestra un listado de pokémons en forma de cards.
- Cada card muestra **nombre** e **imagen** del Pokémon.
- Las cards son **clickeables** y redirigen a la página de detalle.

### 3️⃣ Detalle de Pokémon
- Muestra información detallada del Pokémon seleccionado:
  - Nombre
  - Tipo(s)
  - Habilidades
  - Altura y peso
  - Imagen
- Puede abrirse tanto desde el listado como directamente ingresando la URL.

### 4️⃣ Componente Reutilizable
- `Layout` y `Navbar` se usan en todas las pantallas para mantener consistencia visual.
- `PokemonCard` es reutilizable en listado.

### 5️⃣ Responsividad
- La aplicación es completamente responsive:
  - Mobile
  - Tablet
  - Desktop

---

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
git clone https://github.com/tu-usuario/tp-final-react-micaela-percara.git

2. Entrar en la carpeta del proyecto:
cd tp-final-react-micaela-percara

3. Instalar dependencias:
npm install

4. Ejecutar la app:
npm run dev

5. Abrir el navegador en la URL indicada por Vite (generalmente http://localhost:5173/).