# Dev-focused Dockerfile for Vite + React (no nginx)
FROM node:20-alpine

# Create app dir
WORKDIR /app

# Install deps
COPY package.json .

# Use  npm install
RUN npm install --silent

# Copy source
COPY . .

# Expose Vite default port
EXPOSE 5173

# Default command runs dev server and binds to 0.0.0.0 so host can reach it
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
