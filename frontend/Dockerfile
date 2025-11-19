FROM node:18-alpine

# Install bash & curl
RUN apk add --no-cache bash curl

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Configure Yarn for Alpine / network reliability
RUN yarn config set network-timeout 600000
RUN yarn config set registry https://registry.npmjs.org/

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build Next.js
RUN yarn build

# Expose port
EXPOSE 3000

# Start app
CMD ["yarn", "start"]

