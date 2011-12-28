#!/bin/bash
shopt -s globstar || exit
for f in **
do
  if [[ "$f" =~ \.coffee$ ]] ; then
    coffee -bc $f
  fi
done