# API de ejemplo para gestionar VENTAS de productos

## Descripción

API de ejemplo para gestionar VENTAS de productos.

## Requerimientos

- MariaDB
- NodeJS
- Un navegador web

## Instalación

1. Clonar el repositorio con `git clone https://github.com/profcswni/api-para-ventas.git`
2. Instalar las dependencias con `npm install`
3. Exportar la base de datos `ventas.sql` usando HeidiSQL o cualquier otro gestor de bases de datos
4. Configurar las credenciales de la base de datos en el archivo `config.js` de acuerdo a su entorno
5. Iniciar el servidor con `npm run dev`

## Uso

1. Abrir el navegador web
2. Acceder a la URL `https://ventas-api.cperezni.com`
3. Probar los endpoints de la API

## Lista de endpoints (productos)

- GET `https://ventas-api.cperezni.com/productos` 
- GET `https://ventas-api.cperezni.com/productos/:id`
- POST `https://ventas-api.cperezni.com/productos`
- PUT `https://ventas-api.cperezni.com/productos/:id`
- DELETE `https://ventas-api.cperezni.com/productos/:id`

## TODO

- [ ] Implementar el endpoint para gestionar las ventas
- [ ] Implementar el endpoint para gestionar los usuarios
- [ ] Implementar el endpoint para gestionar los clientes
- [ ] Implementar el endpoint para gestionar los proveedores
- [ ] Implementar el endpoint para gestionar las categorías
- [ ] Implementar el endpoint para gestionar los roles
- [ ] Implementar el endpoint para gestionar los permisos
- [ ] Implementar el endpoint para gestionar los reportes (datos)
- [ ] Implementar el endpoint para gestionar los gráficos (datos)


## Autor

- [Carlos Andres Perez Úbeda](https://cperezni.com)
