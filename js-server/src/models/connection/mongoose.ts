import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const MONGO_URI = 'mongodb://localhost:27017/demodb';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', console.log.bind(console, 'MongDB connected!'))

export default db;
