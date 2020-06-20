# ========================= DEPENDENCY RESOLVER =========================
# Download the dependencies on container
# =======================================================================
FROM node:13.12.0-alpine AS dependency_resolver
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

# ========================= TESTER ======================================
# Run tests on container
# =======================================================================
FROM dependency_resolver as tester
COPY . ./
RUN npm test -- --watchAll=false

# ========================= BUILDER =====================================
# Build the artifact on container
# =======================================================================
FROM dependency_resolver as builder
COPY . ./
RUN npm run build

# ========================= DOCKER IMAGE ================================
# Prepare container image with application artifacts and runtime environment
# =======================================================================
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]