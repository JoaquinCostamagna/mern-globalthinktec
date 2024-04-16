#Dockerfile para la creación de la imagen de la API

#Eligo una imagen base, en este caso node 20.12.2
FROM node:20.12.2-bookworm-slim

WORKDIR /app
#Primero hago la copia del package.json únicamente para que este paso se guarde en cache y no se ejecute cada vez que se modifique un archivo
COPY package.json /app
RUN npm install
#Luego copio el resto de los archivos
COPY . /app

EXPOSE 5000

#Arranco el servidor
CMD ["npm", "start"]