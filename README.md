# mern-globalthinktec
MERN - Prueba Tecnica GlobalThinkTec

// Explicación del proyecto
Este proyecto es una prueba técnica para la empresa GlobalThinkTec, en la cual se pide realizar una consulta y modificación de 'Entidades' utilizando las tecnologías React y Node.js.

Para esta solución utilicé el stack MERN (MongoDB, Express, React y Node.js). Creando archivos docker para cada uno de los servicios, y utilizando docker-compose para levantar los servicios de manera conjunta.

// Pre-requisitos
Para poder ejecutar este proyecto, se debe tener instalado Docker y Node en el sistema.

// Instrucciones de uso
Para utilizar este proyecto, se debe clonar el repositorio y ejecutar el siguiente comando en la raíz del proyecto:
```npm run start```

Este comando creará las imágnes docker y luego levantará los servicios de MongoDB, Express y React en un contenedor docker. Para visualizar la aplicación,
se debe acceder a la dirección http://localhost:3000/

También se puede consultar el log de errores e información sobre los servicios ejecutados con el siguiente comando accediendo a http://localhost:5000/logs.

// Estructura del proyecto
El proyecto está dividido en dos carpetas principales: 'react-app' y 'api-server'. En la carpeta 'react-app' se encuentra el código de la aplicación frontend React, creada con vite y en la carpeta 'api-server' se encuentra el código de la aplicación backend express.

En la raíz del proyecto se encuentra el archivo 'docker-compose.yml' que se encarga de levantar los servicios de MongoDB, Express y React, además de el package.json que contiene el script para levantar correctamente los servicios.