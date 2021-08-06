FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /home/vsts/work/1/s/

CMD node .

EXPOSE 8080

CMD [ "node", "app.js" ]