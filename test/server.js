/**
 * @description jest server
 * @author Ray
 */

 const request = require('supertest')
 const server = require('../src/app').callback()

module.exports = request(server)