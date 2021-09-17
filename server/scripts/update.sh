#!/bin/bash

exec 1> ./response.json
ID=$1
DATA=$2

curl -X PUT -H "Content-Type: application/json" -d "{\"description\":\"$DATA\"}" http://localhost:5000/todos/$ID
