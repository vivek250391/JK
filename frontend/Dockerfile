# Stage 1: Base image and dependencies
FROM node:25-alpine3.22 AS base
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Stage 2: Build the Next.js application
FROM base AS build
WORKDIR /app
COPY . .
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1 
RUN yarn build

# Stage 3: Production runtime (lean image)
FROM node:25-alpine3.22 AS runner
WORKDIR /app

# Set production environment and disable telemetry
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Add a non-root user for security
RUN apk add --no-cache libc6-compat
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy the necessary files from the build stage
COPY --from=build /app/public ./public
# Automatically copies the necessary files for a standalone deployment
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
