# Imagen base de Node
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto que usa NestJS
EXPOSE 3000

# Comando para levantar la app en modo desarrollo (watch)
CMD ["npm", "run", "start:dev"]
