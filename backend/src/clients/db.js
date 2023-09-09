import mongoose from 'mongoose';

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB: Connectted'))
  .catch((err) => console.log(err.message));
