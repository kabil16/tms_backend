const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get("/order", (req, res) => {
    res.send("order deatails")
});
app.get("/order/items", (req, res) => {
    res.send("order Items are send")
});

app.listen(port, () => {
    console.log("server has been started at " + port);
});