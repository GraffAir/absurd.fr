# Image de base
FROM node:18-alpine

WORKDIR /app

# 1. Configuration & dépendances
COPY package*.json ./
RUN npm install --production

# 2. Copie
COPY . .

# 3. Expose du port 3000
EXPOSE 3000

# 4. Run
CMD ["npm", "start", "-H", "0.0.0.0"]
