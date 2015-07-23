#!/bin/bash
echo "Directory to Deploy:"
read dir
cd "$dir"
echo "Bucket Name:"
read bucket_name

aws s3 mb s3://"$bucket_name"

aws s3 sync . s3://"$bucket_name" --exclude ".git/*" --acl "public-read"

aws s3 website s3://"$bucket_name" --index-document index.html
