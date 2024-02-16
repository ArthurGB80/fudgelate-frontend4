# Use official node image as the base image
# FROM node:latest as build
# Set the working directory
# WORKDIR /usr/local/app
# Add the source code to app
# COPY ./ /usr/local/app/
# Install all the dependencies
# RUN npm install
# Generate the build of the application
# RUN npm run build
# List the contents of the dist directory to debug
# RUN ls -la /usr/local/app/dist

# Use oficial nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY ./dist/fodgelate-frontend /usr/share/nginx/html
EXPOSE  80