
# Tarea 1 - AAD

Esta tarea se basa en la creación de una aplicación web capaz de recibir y mostrar reseñas, a través de una interfaz web. En este caso se enfoca en la reseña de rocas, por parte de usuario.




## Authors

- [@roa961](https://www.github.com/roa961) (Rómulo Otárola)


## Variables de entorno

Para ejecutar este proyecto, se deben adicionar las siguientes variables de entorno en el archivo .env

`HOST`

`USUR`

`PASS`

`DAB`

`POSTGRES_DB`

`POSTGRES_USER`

`VITE_API_URL`

**IMPORTANTE:** Se debe incluir un .env con la variable `VITE_API_URL` dentro de la carpeta raíz **client**. Esto es debido al funcionamiento de Vite, que no permite utilizar variables de entorno declaradas en docker-compose.


## Stack de tecnologías

**Client:** React, Axios, Vite

**Server:** Go, Gorm (database),mux

**Database:** Postgres


## Despliegue

Para ejecutar este proyecto, se debe utilizar el siguiente comando

```bash
  docker compose up --build
```
**Se hace uso de la versión 2.27.0 de Docker compose**

Luego de esto, se utilizar la ip del cliente para acceder a la página.
