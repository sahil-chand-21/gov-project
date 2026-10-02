# Build the frontend dist folder
# Copy the dist folder content in backend/public folder

FROM node:20-alpine AS frontend-builder

COPY ./frontend /app

WORKDIR /app

RUN npm install

RUN npm run build

# Build the backend

FROM node:20-alpine AS backend-builder

COPY ./backend /app

WORKDIR /app

RUN npm install

RUN npm run build

# Production stage

FROM node:20-alpine

COPY --from=backend-builder /app/dist /app/dist
COPY --from=backend-builder /app/package.json /app/package.json
COPY --from=backend-builder /app/package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install --omit=dev

COPY --from=frontend-builder /app/out /app/public

CMD ["node", "dist/server.js"]