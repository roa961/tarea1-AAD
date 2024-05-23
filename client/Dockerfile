#client/Dockerfile
FROM node:20.13.1-alpine as client_server

WORKDIR /app

COPY package.json .
#Instalación de react en base al package.json
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
#Se utiliza la ruta /app/dist ya que vite la utiliza
COPY --from=client_server /app/dist /usr/share/nginx/html 
#Puerto 80 para nginx
EXPOSE 80

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]