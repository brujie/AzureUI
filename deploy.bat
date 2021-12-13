@echo off
@title bat 交互执行git命令
C:
cd C:\Users\rujie\Desktop\组件库编写\vue-cli搭建组件库\azure-ui\docs\.vuepress\dist
git init 
git remote add origin https://github.com/brujie/AzureUI.git
git add -A
git commit -m 'deploy'
git push -f https://github.com/brujie/AzureUI.git master:gh-pages