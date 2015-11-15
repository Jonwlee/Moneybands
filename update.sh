#!/bin/bash

# A thing that updates the git repo on the server

# change directories into your repo and run the command inside a tmux
# function

while true
do
    # This pulls the repo
    git pull
    sleep 500
done
