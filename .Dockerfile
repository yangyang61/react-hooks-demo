FROM node:10
MAINTAINER vincent
# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
ADD . /app/
# cd到app文件夹下
WORKDIR /app
# 对外暴露的端口号
EXPOSE 3000
RUN npm install
# 容器启动时执行的命令，类似npm run start
CMD ["npm","start"]
