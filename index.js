import express from "express";
import path from 'path';

const app = express();
const publicPath = path.resolve('public');
app.use(express.static(publicPath));

app.set("view engine",'ejs')

app.get("/", (req, resp) => {
  resp.render("List");
});

app.get("/add", (req, resp) => {
  resp.render("Add");
});

app.get("/update", (req, resp) => {
  resp.render("Update");
});

app.listen(3200);
