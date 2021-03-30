#!/bin/bash

source $(dirname $0)/env.sh

if [ -f $DATA_DIR"/nodeos.pid" ]; then
	pid=`cat $DATA_DIR"/nodeos.pid"`
	echo $pid
	kill $pid
	rm -r $DATA_DIR"/nodeos.pid"

	echo -ne "Stoping Nodeos"

  while true; do
      [ ! -d "/proc/$pid/fd" ] && break
      echo -ne "."
      sleep 1
  done
  echo -ne "\rNodeos Stopped.    \n"
fi
