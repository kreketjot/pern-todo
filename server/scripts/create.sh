#!/bin/bash

exec 1> ./response.json
DATA=$1

curl -X POST -H "Content-Type: application/json" -d "{\"description\":\"${DATA}\"}" http://localhost:5000/todos
# curl -X POST -H "Content-Type: application/json" -d '{"description":"'$DATA'"}' http://localhost:5000/todos
