#!/usr/bin/env bash
# echo $SSH_PUBLIC_KEY > ~/.ssh/authorized_keys   ONLY For Docker in Fargate

source $(dirname $0)/env.sh
source $(dirname $0)/stop.sh

#echo "Donwloading eosio snapshot ..."
#wget https://snapshots.eosnation.io/eos/latest -O latest-snapshot.bin.zst
#unzstd ./latest-snapshot.bin.zst
#rm ./latest-snapshot.bin.zst

echo "Starting eosio service ..."
LOGFILE=/var/log/nodeos.log

nodeos --disable-replay-opts --config-dir $CONFIG_DIR --data-dir $DATA_DIR --snapshot latest-snapshot.bin \
>> $LOGFILE 2>&1 & echo $! > $DATA_DIR/nodeos.pid

