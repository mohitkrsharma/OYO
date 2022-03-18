FROM nginx:1.17.1-alpine
COPY /dist/oyo /usr/share/nginx/html
