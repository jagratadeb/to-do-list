import express from "express";

const app = express();

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
