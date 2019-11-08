FROM node

WORKDIR /fizzBuzz

COPY . .

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]