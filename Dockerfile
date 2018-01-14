FROM node:9.4.0

RUN mkdir e2e-tests

COPY ./ /e2e-tests

WORKDIR /e2e-tests

RUN npm install
