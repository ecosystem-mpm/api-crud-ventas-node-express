#!/bin/sh
# shellcheck disable=SC2046
export $(cat .env);

#Delete the stack
docker stack rm ventas-api

#Restart the stack
cd /var/www/apps/ventas-api && docker stack deploy -c ventas-api.production.yml ventas-api
