@echo off
@title bat 交互执行git命令
git init 
git remote add origin https://github.com/brujie/AzureUI.git
git config --global http.sslVerify "false"
git add -A
git commit -m 'deploy'
git push -f https://github.com/brujie/AzureUI.git master:gh-pages