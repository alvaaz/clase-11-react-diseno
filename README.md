## Clase 11 - Cuando el Diseño y React se juntan

Bienvenidos al repositorio de la Clase 11 de la asignatura TEL-335 de la USM Casa Central. En esta clase, exploramos cómo el diseño impacta en el desarrollo de aplicaciones React y aprendimos sobre diversas estrategias para aplicar diseño a nuestros proyectos.

Este repositorio contiene ejemplos de interfaces utilizando las distintas estrategias vistas en la clase. Cada ejemplo está organizado en su propia carpeta y contiene instrucciones detalladas para ejecutar el proyecto.

## Estrategias

En este repositorio, cada estrategia se encuentra organizada en una carpeta individual. Dentro de ellas, se halla un pequeño proyecto que ejemplifica la implementación de botones de un sistema de diseño, a fin de ilustrar cómo se trabaja con cada enfoque en un contexto real.

### [🪄 CSS in JS](https://github.com/alvaaz/clase-11-react-diseno/tree/main/css-in-js)

En este ejemplo, abordaremos CSS-in-JS, una técnica moderna que permite definir y aplicar estilos directamente en componentes de React utilizando objetos de JavaScript. Esta técnica facilita la gestión de estilos dinámicos y modulares, mejorando el encapsulamiento y la escalabilidad del proyecto. Utilizaremos la librería [styled-components](https://styled-components.com/). Existen otras librerías que permiten hacer lo mismo, como [emotion](https://emotion.sh/), [linaria](https://linaria.dev/) y [stitches](https://stitches.dev/), pero en este caso utilizaremos styled-components por su popularidad y simplicidad.

### [🧙 Utility Classes](https://github.com/alvaaz/clase-11-react-diseno/tree/main/utility-classes)

En este ejemplo, exploraremos el uso de clases de utilidad. La estrategia consiste en utilizar clases predefinidas para aplicar estilos rápidamente a los elementos HTML. Estas clases son altamente reutilizables y permiten crear interfaces consistentes y mantenibles, reduciendo la necesidad de escribir CSS personalizado. Utilizaremos la librería [tailwindcss](https://tailwindcss.com/). Existen otras librerías que permiten hacer lo mismo, pero Tailwind es la más popular y la que tiene mayor cantidad de recursos disponibles.

### [🧩 CSS Modules](https://github.com/alvaaz/clase-11-react-diseno/tree/main/css-modules)

En este ejemplo, implementaremos CSS Modules, un sistema para modularizar y organizar los estilos en proyectos de React. Los archivos CSS se importan directamente en los componentes y generan nombres de clase únicos, evitando conflictos de estilo y mejorando la encapsulación de los estilos.

## Ejecución

Para la ejecución de todos los proyectos estoy usando [pnpm](https://pnpm.js.org/), pero puedes usar el gestor de paquetes que prefieras. Adicionalmente, como generador de proyectos estoy usando [Vite](https://vitejs.dev/).
