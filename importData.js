const Sequelize = require("sequelize");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];
var path = require("path");
var fileName = process.env.npm_config_importPath;

var extension = path.extname(fileName);
var file = path.basename(fileName, extension);

fs.createReadStream(filename)
  .pipe(csv({}))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });
