#Dockerfile to create a production image of the api-server

# Base image selection, I'm using the node image with the version 20.12.2-bookworm-slim because it has a good balance between size and compatibility
FROM node:20.12.2-bookworm-slim

# Set the working directory to /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
# It is a good practice to copy the package.json and package-lock.json files first, so that the npm install command can be cached
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .

# Expose the port 5000 and run the server
EXPOSE 5000
CMD ["npm", "start"]