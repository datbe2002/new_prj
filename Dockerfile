FROM cannin/nodejs-http-server:latest
COPY dist deploy
WORKDIR /deploy
EXPOSE 8080
CMD [ "http-server", "-d", "false", "-p","8080","-g"] 
