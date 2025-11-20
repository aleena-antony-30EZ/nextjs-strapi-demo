FROM node:18-alpine

RUN apk add --no-cache bash curl

WORKDIR /app

COPY package*.json ./

RUN yarn config set network-timeout 600000
RUN yarn config set registry https://registry.npmjs.org/

# Accept Strapi URL from CI/CD
ARG STRAPI_URL
ENV NEXT_PUBLIC_STRAPI_API_URL=$STRAPI_URL

# Create Next.js production environment file inside image
RUN echo "NEXT_PUBLIC_STRAPI_API_URL=$STRAPI_URL" > .env.production

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]

