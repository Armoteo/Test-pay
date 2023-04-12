FROM node:18.7

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# add app
COPY . /usr/src/app

# Env variables
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN
ARG SENTRY_DSN
ENV SENTRY_DSN=$SENTRY_DSN

RUN npm run build

EXPOSE 3000

# start app
CMD ["npm", "start"]
