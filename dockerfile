FROM nginx:alpine

# Remove os arquivos padrão do NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do seu projeto para a pasta do NGINX
COPY . /usr/share/nginx/html

# Expõe a porta 80 (opcional para debug local)
EXPOSE 80
