#!/bin/sh

# Crie um cron job para executar o comando a cada minuto
echo "0 8 * * * node /app/index.js" > /etc/crontabs/root

# Inicie o serviço cron
crond -f -l 8