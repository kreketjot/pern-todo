#!/bin/bash

exec 1> ./response.json

ID=$1

curl -X DELETE -H "Content-Type: application/json" http://localhost:5000/todos/$ID
