import express from "express";

const app = express();
const port = 3000; // default port to listen

// define a route handler for the default route
app.get( "/", ( req, res ) => {
  res.send('200 OK');
});

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
