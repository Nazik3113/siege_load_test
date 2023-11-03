#!/bin/bash

sleep 5

FIRST_BENCHMARK=$(siege -t10s -c10 -f siege.urls.txt)
SECOND_BENCHMARK=$(siege -t10s -c25 -f siege.urls.txt)
THIRD_BENCHMARK=$(siege -t10s -c50 -f siege.urls.txt)
FOURTH_BENCHMARK=$(siege -t10s -c100 -f siege.urls.txt)

echo $FIRST_BENCHMARK
echo $SECOND_BENCHMARK
echo $THIRD_BENCHMARK
echo $FOURTH_BENCHMARK