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
ARG NEXT_PUBLIC_STRIPE_KEY
ENV NEXT_PUBLIC_STRIPE_KEY=$NEXT_PUBLIC_STRIPE_KEY
ARG NEXT_PUBLIC_STRIPE_SECRET_KEY
ENV NEXT_PUBLIC_STRIPE_SECRET_KEY=$NEXT_PUBLIC_STRIPE_SECRET_KEY
ARG NEXT_PUBLIC_PAYPAL_CLIENT_ID
ENV NEXT_PUBLIC_PAYPAL_CLIENT_ID=$NEXT_PUBLIC_PAYPAL_CLIENT_ID


RUN npm run build

EXPOSE 3000

# start app
CMD ["npm", "start"]
