#!/usr/bin/env bash

echo '部署开始'

function init() {
  nvm use 6
  npm install
}

function alpha() {
  NODE_ENV=alpha npm run build
}

function prod() {
  NODE_ENV=production npm run build
}

function main() {  
  init

  if [ "$1" = 'alpha' ]; then
    echo 'make alpha'
    alpha
  fi

  if [ "$1" = 'production' ]; then
    echo 'make production'
    prod
  fi
}

echo 'star: ' `date`
main $@
echo 'end: ' `date`
