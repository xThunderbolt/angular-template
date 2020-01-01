#!/bin/sh

if [[ $# -lt 1 ]]; then
    echo "Usage: $0 new-name"
    exit 1
fi

ORIG_NAME=angular-template
NEW_NAME=$1

grep --exclude-dir=.git -lr $ORIG_NAME | xargs -n1 sed -i "s/$ORIG_NAME/$NEW_NAME/g"
rm $0
env -C "$(dirname $0)" git commit -am "Init $NEW_NAME"
