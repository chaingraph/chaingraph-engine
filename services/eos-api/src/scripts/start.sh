#!/usr/bin/env bash
# echo $SSH_PUBLIC_KEY > ~/.ssh/authorized_keys  Only for Docker in Fargate

source $(dirname $0)/env.sh
source $(dirname $0)/stop.sh

echo "Starting eosio service ..."
LOGFILE=/var/log/nodeos.log

nodeos --disable-replay-opts --config-dir $CONFIG_DIR --data-dir $DATA_DIR \
>> $LOGFILE 2>&1 & echo $! > $DATA_DIR/nodeos.pid

