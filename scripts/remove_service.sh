#!/bin/sh
read -p "Which service you want to remove? " service

rm -rf "apps/${service}"

new_service_list=$(grep -vx 'notification' scripts/microservices.txt)

echo $new_service_list > scripts/microservices.txt