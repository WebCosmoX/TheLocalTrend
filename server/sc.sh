#! /bin/bash
# if [$# -eq 0]; then
#     echo "No argument passed!"
#     exit
# fi
# echo "Enter the target word"
# read word
# for file in $*; do
#     sed -i /$word/d $file
# done
# echo "In all files, lines containing word:$word have been deleted"

echo 'Enter username'
read user
last $user