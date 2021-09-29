#!/bin/sh
sudo git pull origin backend-dev
echo 'Entering client folder...'
echo '*************************'
echo '*************************'
cd client
echo 'Installing client dependencies...'
echo '*************************'
echo '*************************'
yarn
sudo npm run build
echo 'Entering server folder...'
echo '*************************'
echo '*************************'
cd .. && cd server
echo 'Installing server dependencies...'
echo '*************************'
echo '*************************'
npm install
sudo systemctl restart nginx
sudo pm2 restart all