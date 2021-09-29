#!/bin/sh
sudo git pull origin backend-dev
echo 'Installing server dependencies...'
echo '*************************'
sudo npm install
echo 'Entering client folder...'
echo '*************************'
echo '*************************'
cd .. 
cd client
echo 'Installing client dependencies...'
echo '*************************'
echo '*************************'
yarn
npm run build
sudo systemctl restart nginx
sudo pm2 restart all