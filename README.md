# Rick & Morty Application
Technical Challenge

## Installation
Install **server** dependencies
```
npm install && cd server && npm install
```
Install **client** dependencies

```
cd client && npm install
```
Launch dev server and client server
```
npm run dev-server
```
```
npm run dev-client
```

## Configuration

This app requires the following environment variables 

```
PORT=XXXX
URL_DB=mongodb://<HOST>.<PORT>/<DB_NAME>
URL_DB_TEST==mongodb://<HOST>.<PORT>/<DB_NAME>
URL_CLIENT=http://url
SECRET=XXXXXXXXXXXXXXXXXX
```

## Consume from the public API:
[Rick & Morty](https://rickandmortyapi.com)


## Mandatory libraries
### Front:
- React
- Redux

### Backend:
- Express

## Aditional libraries
### Backend:
- nodemon: nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- mongoose: is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- axios
- bcryptjs
- jsonwebtoken
- dotenv
- cors

### Frontend:
- axios
- redux-thunk
- styled-components

## Testing:
### Backend
Backend tested with jest and supertest

### Frontend
Frontend tested with cypress