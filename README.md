# Earth-Mars Communication System

Welcome to the Earth-Mars Communication System repository! This project allows communication between Earth and Mars through a RESTful API. Follow the instructions below to set up and run the project.


## Installation

```sh
git clone https://github.com/your-username/earth-mars-communication.git
cd earth-mars-communication
```

## Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js (v16.16.0 or higher)
- TypeScript (v5.1.6 or higher)
- npm (v8.11.0 or higher)

You can install TypeScript globally by running:

```sh
npm install -g typescript
```

Install project dependencies using npm:

```sh
npm install
```

## Running the Server

To start the server, use the following command:

```sh
npm run start:dev
```
The server will run on port 3000. Please ensure that no other service is using the same port.

## Communication Endpoint

Download and open the Postman application. Create a POST request for the following route path to communicate between Earth and Mars:

```bash
POST http://localhost:3000/api/earth-mars-comm/message
```
Feel free to customize the payload as needed for your communication. Select raw and JSON as the input format.

```sh
{
  "message": "idiot i am elon not houston"
}
```

