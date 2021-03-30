FROM ubuntu:18.04
# Install utilities
RUN apt-get update && apt-get install -y wget jq sudo curl git openssh-server zstd
# Install EOSIO
RUN wget https://github.com/eosio/eos/releases/download/v2.0.7/eosio_2.0.7-1-ubuntu-18.04_amd64.deb
RUN sudo apt install -y ./eosio_2.0.7-1-ubuntu-18.04_amd64.deb   
# Install EOSIO.CDT
RUN wget https://github.com/eosio/eosio.cdt/releases/download/v1.7.0/eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb 
RUN sudo apt install -y ./eosio.cdt_1.7.0-1-ubuntu-18.04_amd64.deb
# Define working directory
WORKDIR /opt/application
# Copy application code
COPY ./ /opt/application
# Define Environment params used by scripts/start.sh
ENV DATA_DIR /root/data-dir
ENV CONFIG_DIR /opt/application/config
# Start nodeos
CMD /opt/application/scripts/start.sh
