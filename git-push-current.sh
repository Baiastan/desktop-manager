#!/bin/bash


current_branch=$(git rev-parse --abbrev-ref HEAD)

git add .

read -p "Enter commit message: " commit_message

git commit -m "$commit_message"

git push origin "$current_branch"


