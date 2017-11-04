FROM node:8
RUN apt update && apt install unzip python-pyshp -y
RUN npm install -g mapshaper
ADD ./reshape /bin/reshape
ADD ./shp2json /bin/shp2json
ADD ./cleangeojson /bin/cleangeojson
ADD ./boot /bin/boot
ADD ./run /opt/run

CMD boot
