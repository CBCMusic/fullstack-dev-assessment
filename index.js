const express = require('express')
const path = require('path')
const request = require('request')
const app = express()
const port = 3000

// HINT: using the Program class will construct a client friendly object.

/** Class representing a Program. */
class Program {
  /**
   * Create a program.
   * @param {string} programTitle - The program's title
   * @param {string} hostName - The program's host names
   * @param {string} programImage - The program's image width
   * @param {number} epochStart - The program's start time as an epoch timestamp 
   */
  constructor(programTitle, hostName, programImage, epochStart) {
    this.programTitle = programTitle
    this.hostName = hostName
    this.programImage = programImage.replace('${width}', '448').replace('${ratio}', '1x1')
    this.airdate = new Date(epochStart).toLocaleTimeString()
  }
}

// This endpoint should consume https://cbc.ca/listen/api/v1/program-queue/1/:regionID
// where regionID is one of the values of the select element
// eg. https://cbc.ca/listen/api/v1/program-queue/1/toronto
app.get('/schedule/:regionID', (req, res) => {
})

app.use('/', express.static(path.join(__dirname, './static')))

app.listen(port, () => console.log(`CBC Listen Fullstack Developer Assessment is listening on port ${port}!`))