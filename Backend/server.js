require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT;
const connectDB = require('./src/db/db');

connectDB();
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
})