FROM node:16-alpine as firstblock

WORKDIR /var/app

COPY package.json .

RUN npm install

COPY . . 

RUN npm run build




FROM nginx
COPY --from=firstblock var/app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  
