## Siege stress test

To run this project type this command:

```bash
  docker-compose up -d
```

## Siege

Siege is already a part of docker-compose.

You can see logs from it in docker logs.

File for local siege testing is called: `siege_local.urls.txt`.

## Statistic

Concurrency - 10

```json
{
    "availability": 100.00,
    "response_time": 0.01,
    "throughput": 0.01
}
```

Concurrency - 25

```json
{
    "availability": 100.00,
    "response_time": 0.03,
    "throughput": 0.01
}
```

Concurrency - 50

```json
{
    "availability": 100.00,
    "response_time": 0.08,
    "throughput": 0.01
}
```

Concurrency - 100(we run out of ports).

```json
{
    "availability": 58.08,
    "response_time": 0.11,
    "throughput": 0.01
}
```

## Examples

Concurrency - 10

```json
{
    "transactions": 8704,
    "availability": 100.00,
    "elapsed_time": 9.20,
    "data_transferred": 0.10,
    "response_time": 0.01,
    "transaction_rate": 946.09,
    "throughput": 0.01,
    "concurrency": 9.96,
    "successful_transactions": 8704,
    "failed_transactions": 0,
    "longest_transaction": 0.07,
    "shortest_transaction": 0.00
}
```

Concurrency - 25

```json
{
    "transactions": 9217,
    "availability": 100.00,
    "elapsed_time": 9.99,
    "data_transferred": 0.11,
    "response_time": 0.03,
    "transaction_rate": 922.62,
    "throughput": 0.01,
    "concurrency": 24.88,
    "successful_transactions": 9217,
    "failed_transactions": 0,
    "longest_transaction": 0.06,
    "shortest_transaction": 0.00
}
```

Concurrency - 50

```json
{
    "transactions": 8806,
    "availability": 100.00,
    "elapsed_time": 9.99,
    "data_transferred": 0.10,
    "response_time": 0.06,
    "transaction_rate": 881.48,
    "throughput": 0.01,
    "concurrency": 49.73,
    "successful_transactions": 8806,
    "failed_transactions": 0,
    "longest_transaction": 0.19,
    "shortest_transaction": 0.01
}
```

Concurrency - 100

```json
{
    "transactions": 1556,
    "availability": 58.08,
    "elapsed_time": 2.74,
    "data_transferred": 0.02,
    "response_time": 0.11,
    "transaction_rate": 567.88,
    "throughput": 0.01,
    "concurrency": 62.82,
    "successful_transactions": 1556,
    "failed_transactions": 1123,
    "longest_transaction": 0.20,
    "shortest_transaction": 0.01
}
```