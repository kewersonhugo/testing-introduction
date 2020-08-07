FROM node:12.18.3-alpine

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8 \
    NODE_PATH=/opt/node_app/app/node_modules \
    PATH=$PATH:/opt/node_app/app/node_modules/.bin

RUN echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf \
    && apk add --no-cache git inotify-tools rsync gettext \
    && npm --force install -g yarn@1.22.4 \
    && yarn

WORKDIR /opt/node_app/app
COPY . .

# CMD yarn dev:ssl
ENTRYPOINT ["tail", "-f", "/dev/null"]
