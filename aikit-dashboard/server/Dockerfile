FROM node:23.11.0-alpine

# Install Docker client - needed to communicate with the host Docker
RUN apk add --no-cache docker-cli

WORKDIR /app

# Install dependencies first (for better caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port the server runs on
EXPOSE 3001

# Command to run the server in production mode
CMD ["node", "dist/index.js"]