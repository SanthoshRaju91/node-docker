FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
	&& apt-get install nodejs -y \
	&& apt-get install npm -y \
	&& npm install -g nodemon

RUN ln -s /usr/bin/nodejs /usr/bin/node
COPY app/ /project/app
WORKDIR /project/app
RUN npm install --verbose
VOLUME /project/app/node_modules
CMD npm start
EXPOSE 3000
