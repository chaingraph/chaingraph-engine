# ChainGraph GraphQL engine.

A realtime GraphQL API for EOSIO applications.

Hasura service is responsible for 

- postgres migrations.
- graphql engine.
- attribute based access control.

## Docker

```
# Build the image
docker build -t chaingraph-hasura:local .

# Start a container
docker run --env-file .env -p 3333:3333 -d chaingraph-hasura:local

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Stop, start, restart, kill
docker stop chaingraph-hasura
docker start chaingraph-hasura
docker restart chaingraph-hasura
docker kill chaingraph-hasura
```