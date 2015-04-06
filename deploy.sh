#!/bin/bash

aws s3 sync app/ s3://brendashih.com --recursive --exclude=".git/*" --exclude=".DS_Store" --exclude=".gitignore" --exclude="*assets/scss/*"
