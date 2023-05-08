# Estrategia de CSS en JS

Para ejecutar el proyecto, primero instala las dependencias con `npm install` y luego ejecuta `npm dev`.

## ¿Qué es CSS en JS?

```js
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

render(
  <Container>
    <Button>Normal Button</Button>
    <Button $primary>Primary Button</Button>
  </Container>
);
```

CSS-in-JS es una forma de aplicar estilos a tus componentes en React usando JavaScript en lugar de archivos CSS tradicionales. Esto te permite escribir y gestionar estilos dentro del mismo archivo de tu componente, facilitando el control de los estilos y haciéndolos más dinámicos y personalizados según el estado o las propiedades del componente.

## ¿Por qué usar CSS en JS?

Usar CSS-in-JS tiene varias ventajas en comparación con el enfoque tradicional de utilizar archivos CSS separados. Aquí hay algunas razones para considerar el uso de CSS-in-JS en tus proyectos de React:

1. **Estilos encapsulados:** Al definir estilos directamente en los componentes, los estilos se vuelven específicos para ese componente, evitando conflictos y fugas de estilo en otros componentes.

2. **Estilos dinámicos:** CSS-in-JS te permite generar estilos basados en el estado, propiedades y lógica de tu componente de React. Esto facilita la creación de componentes altamente personalizables y adaptables.

3. **Facilita la reutilización y mantenimiento:** Al mantener los estilos junto con la lógica y el marcado de un componente, es más fácil entender, mantener y reutilizar los componentes en tu aplicación.

4. **Elimina la necesidad de cargar archivos CSS adicionales:** Al incluir los estilos directamente en tus componentes, no es necesario cargar archivos CSS adicionales, lo que puede mejorar el rendimiento de tu aplicación.

5. **Compatibilidad con Server Side Rendering (SSR):** CSS-in-JS suele ser compatible con SSR, lo que te permite renderizar componentes en el servidor y enviar HTML ya estilizado al cliente. Esto mejora la velocidad de carga inicial y la optimización para motores de búsqueda (SEO).

Sin embargo, también hay algunas desventajas al usar CSS-in-JS, como un mayor tamaño de paquete de JavaScript y una curva de aprendizaje si no estás familiarizado con JavaScript. Por lo tanto, es importante evaluar si CSS-in-JS es la mejor opción para tu proyecto en función de tus necesidades y preferencias específicas.
