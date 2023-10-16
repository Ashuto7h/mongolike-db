config :

- local
  - true - works locally requesting to localhost:4224
  - false - works on server requesting to config host
- username
- password
- dbpath (default pwd/.riftdb)
- host
- logging

- write in TS, document with TypeDoc

- File structure:
- dbname

  - config.json
  - collection
    - document

- create cli
  - use oclif for cli creation
  - init: provide username, password, dbpath, port to create server
  - connect: provide username, password, dbpath, port, host, logging to connect server
  - createdb: provide name to create db
  - usedb: provide name to switch to db

references

- dynamoose - https://github.com/dynamoose/dynamoose/blob/main/packages/dynamoose/lib/Schema.ts
- mongodb
- mongoose
- sequelize
- typeorm
