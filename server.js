/*
 * File:   server.js
 * Author: Fabio Jr. Rossi.
 *
 * Main file of the nodejs server project.
 * This file implements the websocket functions using the ws library.
 */

const express = require("express"); // Import Express library.
const { Server } = require("ws"); // Import Ws library.

const PORT = process.env.PORT || 1988; // Setting for use the remote or the local port.
const boardController = require("./app/controller/controller"); // Import the controllers.

// Instantiate the express server on the port selected.
const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);

const wss = new Server({ server }); // Create a instance of websocket in express server.

// When the client connect trough websocket.
wss.on("connection", (ws) => {
  console.log("Client connected");
  console.log(boardController.findAll());
  ws.send(boardController.findAll()); // Send to client connected the status of all data.
  // When receive data from client.
  ws.on("message", function message(data) {
    console.log("msg - %s", data);
    boardController.convertJson(data); // Call function to convert data received to json object.
    wss.broadcast(); // Send the refreshed data for all client's connected trough broadcasting.
  });

  // Broadcast function implementation, send the server data to all client's connected.
  wss.broadcast = function broadcast() {
    wss.clients.forEach(function each(client) {
      // For each client.
      client.send(boardController.findAll()); // Send data.
      console.log(boardController.findAll()); // Just for testing, send data to log.
    });
  };

  ws.on("close", () => console.log("Client disconnected")); // When the client close connection.
});
