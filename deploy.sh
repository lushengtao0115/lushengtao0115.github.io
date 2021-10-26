## 用来推送博客：先打包博客，然后将打包完成的博客页面推送到我们的仓库
npm run build  # 构建项目，打包

cd public  # 进入打包目录

# 初始化仓库
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lushengtao0115/lushengtao0115.github.io.git master # 提交到这个地址的master分支

cd ../
rm -rf public  # 推送完毕，删除public文件