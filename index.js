const express = require('express');
const app = express();
const dotenv = require('dotenv')
const all_routes = require('./Routes/router')
const cors = require('cors');
dotenv.config()
const PORT = process.env.PORT
app.use(express.json());
app.use(cors())
app.use(all_routes)
app.listen(PORT, () => {
 console.log(`Server is listening at : ${PORT}`);
});
