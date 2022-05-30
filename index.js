const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/routes");
const PORT = 8080;
const cors = require("cors");
//middleware
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || PORT, () => {
  console.log("Server on localhost:" + PORT);
});
