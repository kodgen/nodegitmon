#!/bin/sh

git init
#git
mv git/* .
git add app.js nodegitmon/common.js nodegitmon/checkout.js git.html
git commit -m "git page"
git branch -m git
rm -rf git/
#nodegit
git branch nodegit
git checkout nodegit
rm -rf nodegitmon/
mv nodegit/* .
git rm git.html 
git add app.js nodegitmon/common.js nodegitmon/checkout.js nodegit.html
git commit -m "nodegit page"
rm -rf nodegit/
#nodemon
git branch nodemon
git checkout nodemon
rm -rf nodegitmon/
mv nodemon/* .
git rm nodegit.html
git add app.js nodegitmon/common.js nodegitmon/checkout.js nodemon.html
git commit -m "nodemon page"
rm -rf nodemon/
#nodegitmon
git branch nodegitmon
git checkout nodegitmon
rm -rf nodegitmon/
mv node-git-mon/* .
git rm nodemon.html 
git add app.js nodegitmon/common.js nodegitmon/checkout.js nodegitmon.html
git commit -m "nodegitmon page"
rm -rf node-git-mon/
