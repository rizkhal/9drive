FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_API_URL=http://localhost:4000
ARG VITE_RECAPTCHA_SITE_KEY=
ARG VITE_ALLOW_REGISTRATION=true
ARG VITE_ALLOW_GOOGLE_LOGIN=true
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_RECAPTCHA_SITE_KEY=$VITE_RECAPTCHA_SITE_KEY
ENV VITE_ALLOW_REGISTRATION=$VITE_ALLOW_REGISTRATION
ENV VITE_ALLOW_GOOGLE_LOGIN=$VITE_ALLOW_GOOGLE_LOGIN

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
