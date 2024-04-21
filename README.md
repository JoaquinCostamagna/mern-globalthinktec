# MERN - Prueba Tecnica GlobalThinkTec
## mern-globalthinktec

## Explicación del proyecto
Este proyecto es una prueba técnica para la empresa GlobalThinkTec, en la cual se pide realizar una consulta y modificación de 'Entidades' utilizando las tecnologías React y Node.js.

Para esta solución utilicé el stack MERN (MongoDB, Express, React y Node.js). Creando archivos docker para cada uno de los servicios, y utilizando docker-compose para levantar los servicios de manera conjunta.

## Pre-requisitos
Para poder ejecutar este proyecto, se debe tener instalado Docker y Node en el sistema.
También debe estar corriendo el servicio de Docker en el sistema.

## Instrucciones de uso
Para utilizar este proyecto, se debe clonar el repositorio y ejecutar el siguiente comando en la raíz del proyecto:
```npm run start```

Este comando creará las imágnes docker y luego levantará los servicios de MongoDB, Express y React en un contenedor docker. 
Para visualizar la aplicación, se debe acceder a la dirección http://localhost:3000/

También se puede consultar el log de errores e información sobre los servicios ejecutados con el siguiente comando accediendo a http://localhost:5000/logs.

Para ejecutar test de la API se debe ejecutar el siguiente comando en la carpeta 'api-server' del proyecto:
```npm run test```

## Estructura del proyecto
El proyecto está dividido en dos carpetas principales: 'react-app' y 'api-server'. En la carpeta 'react-app' se encuentra el código de la aplicación frontend React, creada con vite y en la carpeta 'api-server' se encuentra el código de la aplicación backend express.

En la raíz del proyecto se encuentra el archivo 'docker-compose.yml' que se encarga de levantar los servicios de MongoDB, Express y React, además de el package.json que contiene el script para levantar correctamente los servicios.

### Como estructura de directorios para el backend se utilizó:
- src: Para el código fuente de la aplicación.
    - connections: Para las conexiones y setup de la base de datos.
    - controllers: Para los controladores de las rutas.
    - middlewares: Para los middlewares de logging y errores de la aplicación.
    - models: Para los modelos y schemas de la base de datos y tipificación de datos en la aplicación.
    - routes: Para las rutas de la aplicación.
    - utils: Para funciones de utilidad.
- \_\_tests\_\_: Para los tests de la aplicación.

### Como estructura de directorios para el frontend se utilizó:
- src: Para el código fuente de la aplicación.
    - components: Para los componentes reutilizables de la aplicación.
    - pages: Para los componentes que representan las páginas de la aplicación.
    - models: Para las interfaces de los modelos de la aplicación.
    - constants: Para las constantes de la aplicación, por ejemplo los mensajes que se muestran al usuario.
    - utils: Para funciones de utilidad.

## Estandar de código
Todo lo que es código y documentación se encuentra en inglés.
Los mensajes de logs, error y commits están en español
Los nombres de los componentes React y clases están PascalCase
Los nombres de las variables, funciones y archivos de utilidad están camelCase
Los nombres de constantes y variables de entorno están en UPPER_SNAKE_CASE
Los nombres de controladores, enrutadores, tests y midlewares estan en "period.separated.case"
Las variables de entorno se definen en los archivos .env de los respectivos proyectos para desarrollo y en el docker-compose para la build.

### La estructura de los componentes de React es la siguiente:
1. imports
2. exports de contexto
2. constantes
3. definición de props
4. componente
    1. hooks
    2. manejo de estado
    3. variables
    4. effects
    5. handlers
    6. funciones
    7. render
5. export default del componente

## Librerías utilizadas

### Frontend
Para el frontend se utilizó React con las siguientes librerías:
- axios: Para realizar las peticiones HTTP al backend.
- react-router-dom: Para manejar las rutas de la aplicación.
- react-hook-form: Para manejar los formularios de la aplicación.
- react-toastify: Para mostrar notificaciones en la aplicación.
- MUI: Librería de componentes para inputs, modales, tarjetas, iconos.
- tailwindcss: Para estilos de la aplicación.
- react-number-format: Para formatear los inputs de números.

### Backend
Para el backend se utilizó Express con las siguientes librerías:
- mongoose: Para conectarse a la base de datos MongoDB.
- cors: Para permitir las peticiones desde el frontend.
- dotenv: Para manejar las variables de entorno.
- jest y supertest: Para realizar los tests de los endpoints.
- mongodb-memory-server: Para crear una base de datos en memoria para los tests.

## Posibles mejoras
- El test del backend se puede mejorar, ya que solo se realizaron pruebas de integración de los endpoints, se pueden agregar pruebas unitarias de los modelos y controladores.
- Para no extender el alcance de la prueba, no se agregó autenticación a la aplicación. Se podría agregar un sistema de autenticación con JWT para el manejo de sesiones y bcrypt para el almacenamiento de las claves, utilizando un hook del lado del cliente para protejer rutas y un midleware del lado del servidor para controlar el acceso a los endpoints.
- Evité la posibilidad de editar imágenes de los productos para no agregar complejidad a la estructura del proyecto. Sería ideal tener un contenedor de documentos con acceso público, para poder almacenar imágenes y que el cliente pueda acceder directamente al recurso, sin pasar por el servidor.
- Se podría agregar un sistema de paginación y filtros para las consultas, ya que si se tienen muchos registros, la lista se hará muy larga y puede afectar la experiencia del usuario.
- Dada la simplicidad del proyecto, se aprovecha la librería de mongoose para las validaciones de los modelos, pero en un proyecto más grande se podría agregar una librería de validación de esquemas como Joi y una capa de servicios para manejar la conexión con la base de datos.