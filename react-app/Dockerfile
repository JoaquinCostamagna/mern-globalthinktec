#Dockerfile to create a production image of the react app

# Base image selection, I'm using the node image with the version 20.12.2-bookworm-slim because it has a good balance between size and compatibility
FROM node:20.12.2-bookworm-slim as BUILD_IMAGE

# Set the working directory to /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
# It is a good practice to copy the package.json and package-lock.json files first, so that the npm install command can be cached
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a production build
RUN npm run build

# Create a new image with the production build
FROM node:20.12.2-bookworm-slim as PRODUCTION_IMAGE

# Set the working directory to /usr/src/app and copy the production build
WORKDIR /usr/src/app
COPY --from=BUILD_IMAGE /usr/src/app/dist/ /usr/src/app/dist/

# Install the necesary packages to serve the production build
COPY package.json ./
COPY vite.config.ts ./
RUN npm install typescript

# Expose the port 3000 and run the preview command
EXPOSE 3000
CMD ["npm", "run", "preview"]