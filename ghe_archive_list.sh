#!/bin/bash

for n in {1..50}; 
do
    value=$(curl -s \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <token>" \
  "https://api.github.ibm.com/orgs/IBM-Q-Software/repos?page=$n")


## Will print out the list of all archived repositories.

  jq -r '.[] | select(.archived == true) | .name' <<< $value


done
