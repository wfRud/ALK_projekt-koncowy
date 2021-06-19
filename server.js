const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

var upload = multer({ dest: "./public/uploads/" });
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/upload", upload.single("memeImg"), (req, res, error) => {
  try {
    res.send(req.file);
    console.log(req.file);
  } catch (err) {
    res.send(400);
  }
});
app.listen(8000, function() {
  console.log("App running on port 8000");
});
