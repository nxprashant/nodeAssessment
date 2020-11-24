import mongoose from 'mongoose';
class DataBaseServer {

  static open = (mongoUrl) => {
    return new Promise((resolve, reject) => {
      try{
      mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        })
      }
      catch(error){
        return error;
      }
    })
  }
  static disconnect = () => {
    console.log('Mongoose Disconnect');
    mongoose.connection.close();
  }

}

export default DataBaseServer;