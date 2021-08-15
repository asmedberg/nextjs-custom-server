const mongoose = require('mongoose');

const url = "mongodb+srv://blogUser:vjk%40hvd%21mwx7jux0BAM@asmedblog.wvurj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect( url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log("we're connected");
});
