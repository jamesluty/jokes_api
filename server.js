const express = require("express");
const app = express();
const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const JokesRoutes = require("./server/routes/jokes.routes");
JokesRoutes(app);

app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));
