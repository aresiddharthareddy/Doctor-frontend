FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

# Copy all static website files into Nginx
COPY . .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
