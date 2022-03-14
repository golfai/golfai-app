
FROM ubuntu:bionic

WORKDIR /app

# Install general packages
RUN apt update
RUN apt install -y sudo
RUN sudo apt install -y curl

# Install node
ENV NODE_VERSION 14
# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash
# and install node 
RUN apt install -y nodejs

# Install npm
# RUN apt install -y npm

COPY . /app

RUN node -v

RUN npm install

CMD [ "npm", "run", "start"]
