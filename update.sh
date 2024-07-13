#!/bin/bash

# shellcheck disable=SC2164
cd /var/www/apps/ventas-api

chmod +x deploy.sh

# Crear el servicio usando la imagen de PHP 8.2 cswni/laravel-project:1.1.2
docker service create --name npm --restart-condition none --mount type=bind,source=$(pwd),target=/usr/src/app node:lts /bin/bash -c 'cd /usr/src/app && npm install'

# Esperar a que se complete el servicio
SERVICE_NAME="npm"
# shellcheck disable=SC2046
while [ $(docker service ps $SERVICE_NAME -f "desired-state=running" --no-trunc | wc -l) -gt 1 ]; do
    sleep 5
done

# Opcional: Eliminar el servicio
docker service rm $SERVICE_NAME

# Execute deploy.sh
/var/www/apps/ventas-api/deploy.sh
