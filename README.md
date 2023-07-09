# Pokedex

[Click para la versión en español](#spanish-version)

## Table of Contents

- [Introduction](#introduction)
- [Minimum Test Requirements](#minimum-test-requirements)
- [Project](#project)
- [Technology Used in the Project](#technology-used-in-the-project)
- [Project Phases](#project-phases)
  - [1st Phase: Design and Layout](#1st-phase-design-and-layout)
  - [2nd Phase: Functionality Development](#2nd-phase-functionality-development)
  - [3rd Phase: Improvements, Optimization, and Testing](#3rd-phase-improvements-optimization-and-testing)
- [Challenges Encountered](#challenges-encountered)
- [Documentation Used](#documentation-used)
- [Deploy](#deploy)

## Introduction
Professor Serbal has asked us to create a web application where all the Pokemon inhabiting the Sinnoh region can be consulted. Pokemon have a lot of information, and although the professor has mentioned that the most important aspects for him are the image and the name of the Pokemon, the more interesting information we can represent, the better. However, it would be great to be able to represent all this information in both a grid and list format. Additionally, since we can't represent all the information in the list view, it's necessary to be able to view more details about each Pokemon, such as their experience points, type, attack, defense, and special attack. Professor Serbal would also love to have a dark mode for the application when consulting it at night. Lastly, although it's not essential, it would be fantastic to be able to mark favorite Pokemon and view them on another screen of the application.

## Minimum Test Requirements
A web application will be developed in JavaScript using the public PokéAPI for data retrieval. The requirements to be met are:
- Manage an application with two views:
  - A list view with summarized Pokemon information.
  - A detail view with detailed information about the selected Pokemon.
- Be careful! There are countless Pokemon in the Sinnoh region, so it is recommended to paginate the results.
- Organize and structure the information and the application. It would be easy for us to provide you with a mockup or design, but we want you to think about the best way to structure, group, and display the information.
- Add an action to switch between dark mode and light mode in the application.
- In the list of Pokemon, enable an option to switch between grid view and list view.
- The Pokemon images can be obtained from the following URL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{POKEMON_ID}.png`
- The list of Pokemon can be obtained using the following call: `https://pokeapi.co/api/v2/pokemon`, refer to the API Documentation - PokéAPI.

## Project

Technology used in the project:

The project has been developed using React + Vite. I chose this combination because I considered React to be a good option as a framework that would allow me to structure my code using components.

### Project Phases:

The project had to be completed within a period of 7 days, so I divided the work into phases and allocated a limited time to each of them:
1. Design and Layout: 2 days.
2. Functionality Development: 3 days.
3. Improvements, Optimization, and Testing: 2 days.

#### 1st Phase: Design and Layout

For the design of the application, I used Figma, which allowed me to create a basic mockup of the Pokédex for desktop and mobile versions, ensuring a responsive design.

My relationship with Pokémon goes back to the Game Boy Color with the game Pokémon Silver, which brings back good memories. For that reason, I decided to create a nostalgic design that emulates the appearance of the real Pokédex and includes elements from the game, such as the Pallet Town background, the screen message, or the commands.

My goal with this design was to evoke those same memories in the users, making them feel like they were returning to their childhood and playing with a Pokédex.

For the layout of the Pokédex, I used SCSS, which allowed me to take advantage of all the features of CSS with the benefits offered by SASS, creating a more maintainable, scalable, and functional code.

The code is organized into different folders, and each folder contains all the elements that are related to each other (jsx, scss, test, barrel files), making it easier to locate the code.

The code is structured as follows:

- Components: stores all the components.
  - Atoms: includes smaller components that will be used in other components.
- Context: stores the contexts.
- Global Styles: includes all the global styles of the site.
- Views: stores the different views of the application.

Finally, I would like to emphasize that the entire code is 100% accessible. The colors have been tested to ensure sufficient contrast according to the "WCAG Level AAA" standard, and all the tags are properly configured, including ARIA attributes to improve accessibility and ensure that the application can be used with screen readers. In addition to accessibility, I have also taken into account "on-page SEO" settings when developing the application.

#### 2nd Phase: Functionality Development

Once the site layout was completed, the second phase consisted of developing the application's functionalities.

The first step was to obtain the necessary data for the Pokemon. For this purpose, I used the PokeAPI (https://pokeapi.co/) and created a context and a provider that stored all the logic related to the Pokemon and could be used by the components.

I used the fetch hook to retrieve the Pokemon information from the API. Then, using promises, I obtained the details of each individual Pokemon by making additional fetch requests to their respective URLs.

In this context, there are functions to load the list of Pokemon from the API, load the individual information of the selected Pokemon, and handle pagination. I opted for a "scroll load more" style for the general pagination, as it is a commonly used pattern in current applications, mainly in social networks, where users scroll down to load more content. I also created internal pagination for the individual Pokemon view.

The transfer of information from the contexts to the components is mainly done through the use of the context itself and the use of props.

To update and correctly display the information in the application, I used the useState and useEffect hooks.

Once all the Pokemon retrieval logic was set up, I focused on the functionalities related to the Pokédex activity itself.

For this purpose, I created a second context responsible for the Pokédex actions, thus fulfilling the requirements established in the test.

Both the application mode switch and the view switch (grid/list) were implemented as a toggle that adds, modifies, or removes a class or attribute depending on the selected option.

For the dark/light mode, I used the data attribute to assign functionalities as CSS variables. This way, depending on the value of the attribute (dark or light), the application uses the corresponding variables for each case.

To switch between the grid and list views of the Pokemon, the toggle adds the "list" class to the parent element, taking advantage of cascading styles and nesting to change the style from a grid to a list or vice versa.

I chose this approach because I believe that combining CSS styles and variables with the change functionality implemented in JavaScript is the most efficient wayto achieve the required functionality.

This way, I limit the use of JavaScript to adding a toggle that adds a class or modifies an attribute, while the visual change is done through CSS. This reduces the dependence on JavaScript and takes advantage of the efficiency and processing speed of CSS in the browser engine.

To meet the requested requirements, I also added the functionality to mark Pokemon as favorites and view them on a separate screen.

For this purpose, I created a list that stores the IDs of the marked favorite Pokemon. Then, in the "favorites" view, I use the information stored in the array to filter the stored IDs and display the list of favorite Pokemon.

To add or remove Pokemon from the favorites list, I created the "HandleFavorites" component, which checks if the Pokemon is in the favorites list or not, and adds or removes it, displaying the favorites button in the corresponding state.

Finally, I used "localStorage" to store the information related to favorite Pokemon and the dark/light mode in local storage so that it is available when the user revisits the application in their browser.

#### 3rd Phase: Improvements, Optimization, and Testing

Once all the basic requirements of the application were completed, the last two days were dedicated to implementing improvements, optimizations, and performing testing.

Regarding testing, I am not yet very familiar with it, and as a result, I have not been able to apply it due to an issue with the configuration of Jest and Babel that I could not resolve in time.

However, I have left the current configuration and the test example I was using for the <Button> component, and I will continue working to find a solution after delivering the project.

Another improvement I made was creating barrel files to simplify the imports of elements.

Lastly, I added a small tooltip to the Pokemon type icon on the Pokemon cards to improve accessibility.

#### Challenges Encountered

During the development of the project, I faced several challenges.

Firstly, when using React, the web page is rendered within the "#root" element, which prevented me from using my "data-theme" attribute in HTML or the body to change the entire page style. To solve this, I created a <main> element and assigned it the corresponding characteristics, simulating the behavior of the body or HTML.

The second challenge was creating the "CommandContext". I intended to create a "CommandProvider" component, as I had done with the Pokemon context, but I couldn't get it to work properly. As a result, all the context logic is in app.jsx. Although it is not the optimal solution, I will continue working to resolve this issue.

Another challenge was the use of localStorage since I had not used it before. However, I considered it essential for the information about favorite Pokemon to be stored in the user's browser. The next step will be to store this information in a database so that users can save their configuration on different devices and not lose it when clearing the cache.

The third challenge was dealing with testing in React. I will continue to educate myself to be able to perform efficient tests in the future.

In conclusion, I can say that although there is still much room for improvement within the application, I am happy with the result, and it has been a good learning practice.

### Documentation Used
During the development of this project, I consulted various sources to acquire knowledge and address the challenges that arose. Some of the most relevant resources I used were:

- Context creation:
  - [React Context API](https://react.dev/reference/react/createContext)
  - [YouTube - React Context API Tutorial](https://www.youtube.com/watch?v=BVQrG-Bp-94)

- Theme mode creation:
  - [YouTube - Building a Theme Switcher in React](https://www.youtube.com/watch?v=VzF2iTTc0MA)
  - [Better Programming - A Complete Guide to Implementing Dark Mode in React](https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb)
  - [Dev.to - The Best Light/Dark Mode Theme Toggle in JavaScript](https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f)

- Favorites:
  - [React - Updating Arrays in State](https://es.react.dev/learn/updating-arrays-in-state)
  - [YouTube - React Context and State Management Tutorial](https://www.youtube.com/watch?v=jc9_Bqzy2YQ)
  - [Dev.to - How to Move Item Cards to a Favorites Page in React](https://dev.to/annaqharder/how-to-move-item-cards-to-a-favorites-page-in-react-hg5)

- Local Storage:
  - [FreeCodeCamp - How to Use LocalStorage with React Hooks to Set and Get Items](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/)

- Testing:
  - [Jest - Configuration](https://jestjs.io/docs/configuration)
  - [Jest - Getting Started](https://jestjs.io/docs/getting-started)
  - [React Testing Library](https://github.com/testing-library/react-testing-library)
  - [Configurando Jest](https://joroji.notion.site/4-Configurando-Jest-a40f4beaa08b449091added60ed2d18c)
  - [Stack Overflow - Jest not parsing ES6](https://stackoverflow.com/questions/54461150/jest-not-parsing-es6-syntaxerror-unexpected-token-import)
  - [YouTube - React Testing Tutorial for Beginners](https://www.youtube.com/watch?v=KYjjtRgg_H0)

- Others:
  - [Barrel Files in JavaScript](https://flaming.codes/es/posts/barrel-files-in-javascript)
  - [MDN Web Docs - Building Blocks: Overflowing Content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)

### Deploy
You can see the live Pokedex at: [https://pokedex1991.netlify.app/](https://pokedex1991.netlify.app/)

***
## Spanish Version

## Índice

- [Introducción](#introducción)
- [Requisitos mínimos de la prueba](#requisitos-mínimos-de-la-prueba)
- [Proyecto](#proyecto)
- [Tecnología utilizada en el proyecto](#tecnología-utilizada-en-el-proyecto)
- [Fases del proyecto](#fases-del-proyecto)
  - [1ª Fase: Diseño y maquetación](#1ª-fase-diseño-y-maquetación)
  - [2ª Fase: Desarrollo de funcionalidades](#2ª-fase-desarrollo-de-funcionalidades)
  - [3ª Fase: Mejoras, optimización y testing](#3ª-fase-mejoras-optimización-y-testing)
- [Retos encontrados](#retos-encontrados)
- [Documentación empleada](#documentación-empleada)
- [Deploy](#deploy)

## Introducción
El profesor Serbal nos has pedido una aplicación web en la que poder consultar todos los Pokemon que habitan en la región de Sinnoh.
Los Pokemon tienen una gran cantidad de información y, aunque el profesor nos ha comentado que lo más importante para él es la imagen y el nombre de los Pokemon, cuanta más información podamos representar que sea interesante, siempre será mejor. Eso sí, le gustaría poder representar toda esta información tanto en formato cuadrícula como en formato lista.
Además, como en la vista lista no podemos representar toda la información cuando hagamos clic sobre ellos también es necesario poder consultar más datos acerca de cada Pokemon, como sus puntos de experiencia, su tipo, ataque, defensa y ataque especial.
Al profesor Serbal le encantaría, además, poder tener un modo oscuro de la aplicación para cuando la consulta por las noches.
Para terminar, el profesor Serbal también ha dejado caer que para él, aunque no sea imprescindible, sería fantástico poder marcar sus Pokemon favoritos y consultarlos en otra pantalla de la aplicación.

## Requisitos mínimos de la prueba
Se desarrollará una aplicación web en JavaScript utilizando la API pública PokéAPI para la obtención de los datos. Los requisitos a cumplir son:
- Tienes que gestionar una aplicación con dos vistas:
  - Una vista listado con la información resumida de los Pokemons.
  - Una vista detalle con la información detallada del Pokemons seleccionado.
- ¡Cuidado! en la región de Sinnoh hay innumerables Pokemon, por lo que se recomienda paginar los resultados.
- Ordenar la información y estructurar la aplicación. Lo fácil sería que te pasáramos un mockup o diseño, pero queremos que pienses cual es la mejor forma de estructurar, agrupar y mostrar la información.
- Añadir una acción para poder cambiar entre modo oscuro o modo claro la aplicación.
- En el listado de Pokemons, habilitar una opción para poder cambiar la visualización de modo cuadrícula a modo lista.
- La imágenes de los Pokemon se podrán obtener a partir de la siguiente url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{POKEMOM_ID}.png`
- El listado de Pokemon se puede obtener con la siguiente llamada `https://pokeapi.co/api/v2/pokemon`, consulta la documentación del API Documentation - PokéAPI.

## Proyecto

Tecnología utilizada en el proyecto: 

El proyecto se ha desarrollado utilizando React + Vite. Elegí esta combinación porque consideré que React podía ser una buena opción como framework que me permitiría estructurar mi código mediante componentes.

### Fases del proyecto:

El proyecto tenía que completarse en un plazo de 7 días, por lo que dividí el trabajo en fases y asigné un tiempo limitado a cada una de ellas:
1. Diseño y maquetación: 2 días.
2. Desarrollo de funcionalidades: 3 días.
3. Mejoras, optimizaciones y pruebas: 2 días.

#### 1ª Fase: Diseño y maquetación

Para el diseño de la aplicación utilicé Figma, lo cual me permitió crear un mockup básico de la Pokédex para las versiones de escritorio y móvil, asegurando un diseño responsive.

Mi relación con Pokémon se remonta a la Game Boy Color con el juego Pokémon Plata, lo cual me trae buenos recuerdos. Por esa razón, decidí crear un diseño nostálgico que emulara la apariencia de la verdadera Pokédex e incluyera elementos del juego, como el fondo de Pueblo Paleta, el mensaje de la pantalla o los comandos.

Mi objetivo con este diseño era evocar esos mismos recuerdos en los usuarios, para que sintieran que regresaban a su infancia y jugaban con una Pokédex.

Para la maquetación de la Pokédex utilicé SCSS, lo que me permitió aprovechar todas las funcionalidades de CSS con las ventajas que ofrece SAS, creando así un código más mantenible, escalable y funcional.

El código está organizado en carpetas diferentes y cada carpeta contiene todos los elementos que guardan relación entre sí (jsx, scss, test, archivos barril), lo que facilita la localización del código.

El código se estructura de la siguiente manera:

- Components: almacena todos los componentes.
  - Atoms: incluye componentes más pequeños que se utilizarán en otros componentes.
- Context: almacena los contextos.
- Global Styles: incluye todos los estilos globales del sitio.
- Views: almacena las distintas vistas de la aplicación.

Para finalizar, me gustaría destacar que todo el código es 100% accesible. Los colores se han probado para garantizar el contraste suficiente de acuerdo con el estándar "WCAG Level AAA", y todas las etiquetas están configuradas correctamente, incluyendo atributos ARIA para mejorar la accesibilidad y asegurarnos de que la aplicación pueda ser utilizada con lectores visuales. Además de la accesibilidad, también he tenido en cuenta la configuración del "SEO on page" al desarrollar la aplicación.

#### 2ª Fase: Desarrollo de funcionalidades 

Una vez completada la maquetación del sitio, la segunda fase consistió en desarrollar las funcionalidades de la aplicación.

El primer paso fue obtener los datos necesarios de los Pokémon. Para ello, utilicé la PokeAPI (https://pokeapi.co/) y creé un contexto y un proveedor que almacenara toda la lógica relacionada con los Pokémon y que luego pudiera ser utilizada por los componentes.

Utilicé el hook fetch para obtener la información de losPokémon de la API. Luego, mediante promesas, obtuve los detalles de cada Pokémon individual realizando solicitudes fetch adicionales a sus respectivas URLs.

En este contexto, se encuentran las funciones para cargar la lista de Pokémon desde la API, cargar la información individual de los Pokémon seleccionados y la lógica de paginación. Opté por un estilo de "scroll load more" para la paginación general, ya que es un patrón comúnmente utilizado en aplicaciones actuales, principalmente en redes sociales, donde los usuarios deslizan hacia abajo para cargar más contenido, y también creé una paginación interna para la vista de los Pokémon individuales.

La transferencia de información de los contextos a los componentes se realiza principalmente a través del uso del propio contexto y el uso de props.

Para actualizar y mostrar correctamente la información en la aplicación, utilicé los hooks useState y useEffect.

Una vez configurada toda la lógica de obtención de los Pokémon, me centré en las funcionalidades relacionadas con la actividad de la Pokédex en sí.

Para ello, creé un segundo contexto encargado de las acciones de la Pokédex, cumpliendo así los requisitos establecidos en la prueba.

Tanto el cambio de modo de la aplicación como el cambio de vistas (grid/lista) se implementaron como un interruptor que agrega, modifica o elimina una clase o atributo según la opción seleccionada.

Para el modo claro/oscuro, utilicé el atributo de datos ("data-attribute") para asignarle funcionalidades como variables de CSS. De esta manera, dependiendo del valor del atributo (dark o light), la aplicación utiliza las variables correspondientes a cada caso.

Para cambiar entre las vistas de lista y cuadrícula de los Pokémon, el interruptor agrega la clase "lista" al elemento padre, aprovechando así los estilos en cascada y la anidación para cambiar el estilo de una cuadrícula a una lista o viceversa.

Opté por este enfoque porque considero que combinar los estilos de CSS y las variables con la funcionalidad de cambio implementada en JavaScript es la forma más eficiente de lograr la funcionalidad requerida.

De esta manera, limito el uso de JavaScript a agregar un interruptor que agrega una clase o modifica un atributo, mientras que el cambio visual se realiza mediante CSS. Esto reduce la dependencia de JavaScript y aprovecha la eficiencia y velocidad de procesamiento de CSS en el motor del navegador.

Para cumplir con los requisitos solicitados, también añadí la funcionalidad de marcar los Pokémon favoritos y poder consultarlos en una vista separada.

Para ello, creé una lista que almacena los IDs de los Pokémon marcados como favoritos. Luego, en la vista "favorites", utilizo la información almacenada en el array para filtrar los IDs almacenados y mostrar la lista de Pokémon favoritos.

Para agregar o quitar Pokémon de la lista de favoritos, creé el componente "HandleFavorites", que verifica si el Pokémon está en la lista de favoritos o no, y lo agrega o retira, mostrando el botón de favoritos en el estado correspondiente.

Por último, utilicé "localStorage" para almacenar la información relativa a los Pokémon favoritos y al modo claro/oscuro en el almacenamiento local, de modo que esté disponible cuando el usuario vuelva a acceder a la aplicación en su navegador.

#### 3ª Fase: Mejoras, optimización y testing

Una vez completados todos los requisitos básicos de la aplicación, los dos últimos días se dedicaron a implementar mejoras, optimizaciones y realizar pruebas.

En cuanto al testing, no estoy demasiado familiarizada aún con él y, como resultado, no he podido aplicarlo debido a un problema con la configuración de Jest y Babel que no he podido resolver a tiempo.

De todas formas, he dejado como ejemplo la configuración actual y el test de prueba que estaba utilizando para el componente <Button> y, una vez entregado el proyecto seguiré trabajando para ponerle solución.

Otra mejora que realicé fue la creación de archivos "barril" para simplificar las importaciones de los elementos.

Por último, agregué un pequeño tooltip al icono del tipo de Pokémon en las tarjetas de Pokémon para mejorar la accesibilidad.

#### Retos encontrados

Durante el desarrollo del proyecto, me he enfrentado a varios desafíos.

En primer lugar, al utilizar React, la página web se renderizaba dentro del elemento "#root", lo que me impedía utilizar mi atributo "data-theme" en HTML o en el body para cambiar todo el estilo de la página. Para resolverlo, creé un elemento <main> y le asigné las características correspondientes, simulando el comportamiento del body o el HTML.

El segundo desafío fue al crear el "CommandContext". Tenía la intención de crear un componente "CommandProvider", al igual que había hecho con el contexto de los Pokémon, pero no logré que funcionara correctamente. Como resultado, toda la lógica del contexto se encuentra en app.jsx. Aunque no es la solución óptima, continuaré trabajando para resolver este problema.

Otro desafío fue el uso de localStorage, ya que no lo había utilizado anteriormente. Sin embargo, consideré fundamental que la información sobre los Pokémon favoritos se pudiera almacenar en el navegador del usuario. El siguiente paso será almacenar esta información en una base de datos para que los usuarios puedan guardar su configuración en diferentes dispositivos y no la pierdan al borrar la memoria caché.

El tercer desafío fue enfrentarme a las pruebas con React. Continuaré formándome para poder realizar pruebas eficientes en el futuro.

En conclusión, puedo decir que, aunque aún quede mucho por mejorar dentro de la aplicación, estoy contenta con el resultado y ha sido una buena práctica de aprendizaje.

### Documentación empleada
Durante el desarrollo de este proyecto, he consultado diversas fuentes para adquirir conocimientos y abordar los desafíos que me han surgido. Algunos de los recursos más relevantes que he utilizado han sido:

- Creación de contextos:
  - [React Context API](https://react.dev/reference/react/createContext)
  - [YouTube - React Context API Tutorial](https://www.youtube.com/watch?v=BVQrG-Bp-94)

- Creación de modo claro/oscuro:
  - [YouTube - Building a Theme Switcher in React](https://www.youtube.com/watch?v=VzF2iTTc0MA)
  - [Better Programming - A Complete Guide to Implementing Dark Mode in React](https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb)
  - [Dev.to - The Best Light/Dark Mode Theme Toggle in JavaScript](https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f)

- Favoritos:
  - [React - Updating Arrays in State](https://es.react.dev/learn/updating-arrays-in-state)
  - [YouTube - React Context and State Management Tutorial](https://www.youtube.com/watch?v=jc9_Bqzy2YQ)
  - [Dev.to - How to Move Item Cards to a Favorites Page in React](https://dev.to/annaqharder/how-to-move-item-cards-to-a-favorites-page-in-react-hg5)

- Almacenamiento local:
  - [FreeCodeCamp - How to Use LocalStorage with React Hooks to Set and Get Items](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/)

- Testeo:
  - [Jest - Configuration](https://jestjs.io/docs/configuration)
  - [Jest - Getting Started](https://jestjs.io/docs/getting-started)
  - [React Testing Library](https://github.com/testing-library/react-testing-library)
  - [Configurando Jest](https://joroji.notion.site/4-Configurando-Jest-a40f4beaa08b449091added60ed2d18c)
  - [Stack Overflow - Jest not parsing ES6](https://stackoverflow.com/questions/54461150/jest-not-parsing-es6-syntaxerror-unexpected-token-import)
  - [YouTube - React Testing Tutorial for Beginners](https://www.youtube.com/watch?v=KYjjtRgg_H0)

- Otros:
  - [Barrel Files in JavaScript](https://flaming.codes/es/posts/barrel-files-in-javascript)
  - [MDN Web Docs - Building Blocks: Overflowing Content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)

### Deploy
Puedes ver la pokedex en vivo en: [https://pokedex1991.netlify.app/](https://pokedex1991.netlify.app/)
