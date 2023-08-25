#!/bin/bash

if [[ -d /app/.next ]]
then
    rm -rf /app/.next
    npm run build
fi

printenv

npm start
