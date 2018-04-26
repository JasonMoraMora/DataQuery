# DataQuery

### Sistema CRUD 

Sistema para administrar los datos de personas, se usa la terminacion CRUD: 

* Create 
* Read
* Update
* Delete

El esquema que usa es estatico por lo tanto solo digitara los campos comprendidos que va desde el documento de identidad hasta el numero de telefono.

Usa un autocarga hecho con funciones basicas de ajax para enviar y traer datos del servidor sin la necesidad de recargar la pagina completamente. 

Caracteristicas: 
* El campo Buscar de la seccion update y delete funciona como input tipo "text" pero tiene una lista interna que tiene los datos del nro Documento para facilitar la busqueda de los dnis, en caso colocar otra numeracion, no va a aparecer ninguna referencia y aparte no va a consultar ningun dato de la base de datos ya que se basa en la lista interna que tiene. 
* Contamos con un campo de entrada tipo texto debajo de las secciones create, update y delete. Este campo busca los datos que estan en la tabla, ojo no se comunica con la base de datos, solo se basa en los datos que estan en la tabla que por cierto esos datos son traidos de una base de datos, pero la funcion que uso no tiene relacion directa con la base de datos. Este campo busca los datos ya sea por cualquier tipo de datos "dni, nombre, apellido, telefono, etc."

### Tecnologias

* CSS(CSS Grid, w3.css, fontawesome.css)
* Javascript(Ajax, JSON)
* Motor DB(mongoDB driver)
* BackEnd(NodeJS con ExpressJS)
* FrontEnd(Handlebars)

### Requisitos 

Tener instalado en tu pc Mongodb, NodeJS y npm

### Instalar y ejecutar proyecto

Paso 1
Descargar el paquete como Zip desde el repo de github 
[Link del repositorio](https://www.google.com)

O en todo caso clonar desde el mismo git
```
git clone https://github.com/JasonMoraMora/DataQuery.git
```
Paso 2
Correr el motor de base de datos
```
sudo service mongod start
```

Paso 3
Dirigirnos al directorio de la aplicacion a travez de la terminal o la consola de comandos de windows y ejecutar el siguiente comando 
```
npm start
```
Como resultado nos debe aparecer el siguiente mensaje en la consola
```
Servidor web iniciado en el puerto 3000
Connected successfully to server
```

Paso 4
Abrir un navegador y escribir en la url localhost:3000

Imagen de como es el sistema
Dale click en la imagen y nos rediccionara a un video en youtube explicando su uso
[![CRUD](miniatura.png)](https://www.youtube.com/watch?v=2cmnTNtvb1c)

Saludos. 