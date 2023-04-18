'use strict';


module.exports.servicioPOST = async(event, context, callback) => {
context.callbackWaitsForEmptyEventLoop = false;
var timestamp = new Date().getTime();
const body = JSON.parse(event.body);
var fecha = timestamp;
var mensaje = body.mensaje;



 callback(null, {
  statusCode: 200,
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(
   {
    message: `este es un POST exitoso` ,
    data: {
     fecha,
     mensaje
    }
   },
  ),
 })




};