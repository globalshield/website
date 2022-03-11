#!/usr/bin/env sh

rm -rf .git/

git init
git add .
git remote add origin git@github.com:globalshield/website.git

docker run --rm -it -v ~/.ssh/gs.key:/root/.ssh/ed25519 -v $(pwd):/app gs-git commit -m 'Slava Ukraini!'
docker run --rm -it -v ~/.ssh/gs.key:/root/.ssh/ed25519 -v $(pwd):/app gs-git push origin main -f
