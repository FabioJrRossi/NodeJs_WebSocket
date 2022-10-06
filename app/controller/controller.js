/*
 * File:   controller.js
 * Author: Fabio Jr. Rossi.
 *
 * File with functions needed to manipulate the data.
 */

const boardModel = require("../model/model.js"); // Import data model.

// This function return a json string format of the stored data.
exports.findAll = () => {
  const value = `{"clientId":"${boardModel.clientId}","relayFall":${boardModel.relayFall},"relayFilter":${boardModel.relayFilter},"relayHidro":${boardModel.relayHidro},"relayHot":${boardModel.relayHot},"rgbCor":${boardModel.rgbCor},"rgbStrobo":${boardModel.rgbStrobo},"sensor1":${boardModel.sensor1},"sensor2":${boardModel.sensor2}}`;
  return value;
};

// This function convert json data received from client and store them is the model variables.
exports.convertJson = (data) => {
  const json = JSON.parse(data); // Convert data to json object.
  if (json.hasOwnProperty("clientId")) {
    // If have this property in the json object.
    boardModel.clientId = json.clientId; // Store clientId data json to the clientId model variable.
  } // The same below, using other variables.
  if (json.hasOwnProperty("relayFall")) {
    boardModel.relayFall = json.relayFall;
  }
  if (json.hasOwnProperty("relayFilter")) {
    boardModel.relayFilter = json.relayFilter;
  }
  if (json.hasOwnProperty("relayHidro")) {
    boardModel.relayHidro = json.relayHidro;
  }
  if (json.hasOwnProperty("relayHot")) {
    boardModel.relayHot = json.relayHot;
  }
  if (json.hasOwnProperty("rgbCor")) {
    boardModel.rgbCor = json.rgbCor;
  }
  if (json.hasOwnProperty("rgbStrobo")) {
    boardModel.rgbStrobo = json.rgbStrobo;
  }
  if (json.hasOwnProperty("sensor1")) {
    boardModel.sensor1 = json.sensor1;
  }
  if (json.hasOwnProperty("sensor2")) {
    boardModel.sensor2 = json.sensor2;
  }
};
