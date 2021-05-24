FROM registry.cidsfrcutn.tech/caja/consultas/caja/node-oracle:2.0.0
RUN npm install pm2 -g
WORKDIR /capacitacion
COPY package.json ./package.json
RUN npm install COPY . ./
COPY ormconfig-prod.json ./ormconfig.json
RUN npm run build
RUN pm2 dump
EXPOSE 3108
CMD [ "pm2-runtime", "npm", "--", "start" ]