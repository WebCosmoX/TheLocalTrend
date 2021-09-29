#!/bin/sh
sudo git pull origin backend-dev
echo 'Installing server dependencies...'
echo '*****Developed by********'
echo '*****Bhargab Nath********'
sudo npm install
echo 'Entering client folder...'
echo '*****Developed by********'
echo '*****Bhargab Nath********'
cd .. 
cd client
echo 'Installing client dependencies...'
echo '*****Developed by********'
echo '*****Bhargab Nath********'
yarn
npm run build
sudo systemctl restart nginx
sudo pm2 restart all