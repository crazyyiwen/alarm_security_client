# Stage 1: Build the React (Vite) app
FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build for production
RUN npm run build


# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from first stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5173 on host mapped to 80 in container
EXPOSE 5173

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
