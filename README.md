# Sneak3r-head

> E-commerce app built with the MERN stack.

## Installation and Setup

Create .env file with these variable:

```bash
CLOUD_NAME=YOUR_CLOUD_NAME
CLOUD_API_KEY=YOUR_CLOUD_API_KEY
CLOUD_SECRET_API=YOUR_CLOUD_SECRET_API
MONGO_URI=UOUR_MONGO_URI
SECRET_OR_KEY=YOUR_SECRET_OR_KEY
```

You are required to have Cloudinary API and it can be obtained by creating an account at https://cloudinary.com

You would also need to change mongoDB connection to local database if you do not have a MongoURI at mongodb atlas.


## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:3000 and client on http://localhost:3001
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## App Info

### Author

Trung Nguyen

### Version

1.0.0

### License

This project is licensed under the MIT License
