FROM ubuntu:23.10

WORKDIR /siege

ENV VERSION=4.0.8

RUN apt update -y && apt upgrade -y \
    && apt install siege -y

COPY siege.sh ./siege.sh
COPY siege.urls.txt ./siege.urls.txt

RUN chmod +x ./siege.sh

CMD [ "sh", "./siege.sh" ]