Node/Express setup
===

Step 1: setup
---

- create project root folder
- open in VS Code
- git init
- npm init
- in terminal: `npm install express` 
- create `server` folder
- create `server.js` in `server` folder
- create `server/public` folder
- in `public`: create `index.html`, `scripts` folder, & `vendors` folder

Step 2: spinning up server (vid: URL)
---

in server.js:

```
// requires
const express = require( 'express' );
const app = express();

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) //end server up
```

- run `node server/server.js` in terminal
- add "start" script to package.json
- add to 'server.js' above 'app.listen': ```// uses
app.use( express.static( 'server/public' ) );```

should be able to run 'npm start' in terminal now and load 'localhost:5000' in browser to see the html page

note: make sure no other projects are running on this port or you will get an "INUSE" error

- add '.gitignore' in root folder & add 'node_modules'