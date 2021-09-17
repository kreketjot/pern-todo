#!/bin/bash

exec 1> ./response.json

curl -X GET -H "Content-Type: application/json" http://localhost:5000/todos
