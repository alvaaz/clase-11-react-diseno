# Estrategia de CSS en JS

Para ejecutar el proyecto, primero instala las dependencias con `npm install` y luego ejecuta `npm dev`.

## ¿Qué es CSS Modules?

`button.module.css`

```css
.button {
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
}
```

`button.js`

```js
import styles from "./button.module.css";

function Button() {
  return <button className={styles.button}>Normal Button</button>;
}
```

CSS Modules es una forma de organizar y aplicar estilos en tus proyectos de React, manteniendo los estilos en archivos CSS separados pero vinculándolos específicamente a tus componentes. Con CSS Modules, cada archivo CSS se convierte en un módulo que puede ser importado en un componente de React, proporcionando estilos únicos y encapsulados para ese componente.

Esto evita conflictos de estilo entre diferentes componentes, ya que cada componente utiliza sus propios estilos. Además, CSS Modules genera automáticamente nombres de clase únicos para evitar la superposición y garantizar que los estilos de un componente no afecten a otros componentes involuntariamente.

En resumen, CSS Modules es una forma de mantener tus estilos en archivos CSS separados, pero asegurándote de que estén específicamente asociados a un componente de React, proporcionando un encapsulamiento de estilos más efectivo y evitando conflictos.

## ¿Por qué usar CSS Modules?

Usar CSS Modules en tus proyectos de React tiene varias ventajas en comparación con enfoques tradicionales o incluso con CSS-in-JS. Algunas razones para considerar el uso de CSS Modules son:

1. **Encapsulamiento de estilos:** Con CSS Modules, los estilos están vinculados específicamente a un componente, evitando que los estilos se filtren y afecten a otros componentes. Esto mejora la modularidad y el mantenimiento de tus estilos.

2. **Nombres de clase únicos:** CSS Modules genera automáticamente nombres de clase únicos, lo que evita conflictos y colisiones de estilos entre diferentes componentes.

3. **Mantiene la familiaridad con CSS:** A diferencia de CSS-in-JS, CSS Modules permite seguir utilizando archivos CSS, lo que facilita la transición para aquellos que ya están familiarizados con la escritura de CSS tradicional.

4. **Compatibilidad con la mayoría de las herramientas de construcción:** CSS Modules es compatible con la mayoría de las herramientas de construcción modernas como Webpack, lo que facilita su integración en proyectos existentes.

5. **Reutilización de estilos:** Los estilos de un módulo pueden ser fácilmente importados y reutilizados en múltiples componentes, lo que facilita la creación de aplicaciones consistentes y coherentes.

6. **Separación de responsabilidades:** Al mantener los estilos en archivos separados, se mantiene una clara separación de responsabilidades entre la lógica de los componentes y la presentación visual.

A pesar de sus ventajas, también hay algunas desventajas en el uso de CSS Modules, como la posible complejidad adicional en la configuración del entorno de construcción y la falta de estilos dinámicos basados en el estado del componente. Es importante evaluar si CSS Modules es la mejor opción para tu proyecto en función de tus necesidades y preferencias específicas.
