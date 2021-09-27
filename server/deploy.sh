#!/bin/sh
sudo git pull origin backend-dev
echo 'Entering client folder...'
cd client
echo 'Installing client dependencies...'
yarn
sudo npm run build
echo 'Entering server folder...'
cd .. && cd server
echo 'Installing server dependencies...'
npm install
sudo systemctl restart nginx
sudo pm2 restart 0