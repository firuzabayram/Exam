
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { Schema } = mongoose;
const educationSchema = new Schema({
  img: { type: String, required: true },
  complete: { type: String, required: true },
  guide: { type: String, required: true },
  imgtwo: { type: String, required: true },
  author: { type: String, required: true },
  number: { type: Number, required: true },
  
});

const Education = mongoose.model("education", educationSchema);

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/education", (req, res) => {
  Education.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.post("/education", (req, res) => {
    let user = new Education({
      img: req.body.img,
      complete: req.body.complete,
      guide: req.body.guide,
      imgtwo: req.body.imgtwo,
      author: req.body.author,
      number: req.body.number,
    });
    user.save();
  });

  app.delete("/education/:id", (req, res) => {
    const { id } = req.params;
    Education.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.send("Deleted");
      } else {
        res.status(500).json({ message: err });
      }
    });
  });

  app.get("/education/:id", (req, res) => {
    const { id } = req.params;
    Education.findById(id, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.status(500).json({ message: err });
      }
    });
  });
  


  mongoose.set('strictQuery', true);
mongoose.connect(
    "mongodb+srv://firuzabayram:firuzabayram@cluster0.9yguri4.mongodb.net/?retryWrites=true&w=majority",
    (err) => {
       if(!err){
        console.log("Db connected");
        app.listen(port, () => {
          console.log(`Example app listening on port  http://localhost:${port}`)
        })
       }
    }
)
  