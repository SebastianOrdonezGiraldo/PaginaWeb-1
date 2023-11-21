// Importa la biblioteca React. Esta biblioteca es necesaria para crear componentes de React.
import React from 'react';

// Importa el componente Navbar desde el archivo Navbar.js en la carpeta components.
import Navbar from './components/Navbar';

// Importa el archivo de estilos CSS para la aplicación.
import './App.css';

// Importa el componente Home desde el archivo Home.js en la carpeta pages dentro de la carpeta components.
import Home from './components/pages/Home';

// Importa los componentes BrowserRouter, Routes y Route desde la biblioteca react-router-dom.
// BrowserRouter es un componente que envuelve la aplicación y proporciona las funcionalidades de enrutamiento.
// Routes es un componente que envuelve todos los componentes Route.
// Route es un componente que renderiza un componente específico cuando la URL coincide con su ruta.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes Services, Products y SignUp desde sus respectivos archivos en la carpeta pages dentro de la carpeta components.
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// Define el componente App. Este es el componente principal de tu aplicación.
function App() {
  return (
    // Los símbolos <> y </> son una forma corta de React.Fragment, que permite agrupar varios elementos sin añadir un nodo extra al DOM.
    <>
      // Envuelve toda la aplicación con el componente Router para habilitar el enrutamiento.
      <Router>
        // Renderiza el componente Navbar.
        <Navbar />
        // Envuelve todos los componentes Route con el componente Routes.
        <Routes>
          // Define varias rutas utilizando el componente Route.
          // Cada ruta tiene una prop path que especifica la URL de la ruta y una prop element que especifica el componente a renderizar cuando la URL coincide con la ruta.
          // La prop exact en la primera ruta significa que esta ruta sólo se renderizará si la URL coincide exactamente con la ruta.
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

// Exporta el componente App como el export por defecto de este módulo. Esto permite importar App en otros archivos usando import App from './App'.
export default App;
