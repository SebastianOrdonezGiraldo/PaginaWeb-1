// Importa la biblioteca React. Esta biblioteca es necesaria para crear componentes de React.
import React from 'react';

// Importa la biblioteca ReactDOM. Esta biblioteca es necesaria para renderizar los componentes de React en el DOM.
import ReactDOM from 'react-dom';

// Importa el componente App desde el archivo App.js. Este es el componente principal de tu aplicación.
import App from './App';

// Utiliza la función render de ReactDOM para renderizar el componente App en el elemento con id 'root' en tu archivo HTML.
// <App /> es la sintaxis JSX para representar el componente App.
// document.getElementById('root') obtiene una referencia al elemento con id 'root' en tu archivo HTML.
ReactDOM.render(<App />, document.getElementById('root'));
