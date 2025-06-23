# ─── Stage 1: Builder ─────────────────────────────────────────────────────────
FROM node:23-slim AS builder
WORKDIR /app

# Install build-time dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source, build the app
COPY . .
RUN npm run build

# ─── Stage 2: Production Image ───────────────────────────────────────────────
FROM node:23-slim AS runner
WORKDIR /app

# Only install prod deps
COPY package.json package-lock.json ./
RUN npm ci --production

# Copy build output from the builder stage
COPY --from=builder /app/build ./build

# Expose Remix’s default port
EXPOSE 9632

# Run the Remix server
CMD ["npm", "run", "start"]