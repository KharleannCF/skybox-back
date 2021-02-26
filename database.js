const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:GcdEPPklFXmFYOEf@cluster0.pff2a.mongodb.net/Mosaicapp?retryWrites=true&w=majority",
    {
      //auth: { authSource: process.env.DB_COLLECTION },
      //user: process.env.DB_USER,
      //pass: process.env.DB_PASSWORD,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((db) => console.log("DB connected"))
  .catch((err) => console.error(err));
