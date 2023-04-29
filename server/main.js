const dbjson = require("./db.json");

dbjson.blogs.sort((a, b) => {
  console.log(a);
  console.log(b);
});
