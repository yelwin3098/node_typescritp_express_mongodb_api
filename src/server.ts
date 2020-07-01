import app from "./app";
import * as https from 'https';
import * as fs from 'fs';
const PORT = 3000;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})