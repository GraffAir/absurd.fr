# Image de base
FROM node:18-alpine

WORKDIR /app

# 1. Configuration & dépendances
COPY package*.json ./
RUN npm install

# 2. Copie
COPY . .

# 3. Build
RUN npm run build

# 4. Expose du port 3000
EXPOSE 3000

# 5. Run
CMD ["npm", "start"]
