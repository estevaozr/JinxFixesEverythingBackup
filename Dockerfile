FROM nginx:latest AS base

COPY ./server.conf \
     /etc/nginx/conf.d/

