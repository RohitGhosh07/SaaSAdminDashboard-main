FROM node:18-alpine

WORKDIR /app

# Install dependencies first to leverage Docker cache
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source
COPY . .

ENV CHOKIDAR_USEPOLLING=true

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]
