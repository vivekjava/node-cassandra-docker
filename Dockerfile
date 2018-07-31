FROM node:carbon
WORKDIR /
COPY . /
RUN npm set registry http://192.168.1.160:4873/
RUN npm install
EXPOSE 8000
CMD node index.js   