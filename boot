#!/usr/bin/env bash

if [ -z $IMG ]
then
    echo "e.g. docker run -e IMG=<docker image id> <docker image id>"
    exit 1
fi
echo 'docker run --user `id -u` -v `pwd`:`pwd` -w `pwd`'" $IMG" reshape