"use strict";
var soap = require('soap');
const express = require('express')
var http = require('http');
var xml = require('fs').readFileSync('studentS.wsdl', 'utf8');

var studentS = {
  Students_Service: {
    Students_Port: {
      getStudents: function (args) {
        return ([
          {
            name: "First student",
            age: 27,
            courses: ['arabic', 'math', 'english'],
            married: false
          },
          {
            name: "Second student",
            age: 24,
            courses: ['math', 'english', 'french'],
            married: false
          },
          {
            name: "Third student",
            age: 25,
            courses: ['math', 'english', 'french'],
            married: false
          }
        ])
      }
    }
  }
};

const server = express();

server.listen(8000 ,() => {
    console.log('listening on port 8000!')
  });

soap.listen(server, '/wsdl', studentS, xml);