'use strict';

module.exports.servicioGet = async (event) => {
 return {
  statusCode: 200,
  body: JSON.stringify(
   {
    message: `El mensaje es ${event.pathParameters.message}`,
    input: event,
   },
   null,
   2
  ),
 };
};