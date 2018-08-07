const express = require('express');
const filmRouter = new express.Router();

let films = [
            {title:"Dr Strange",year:2016, production_Company:"Marvel Studios"},
            {title:"Iron Man",year:2008, production_Company:"Marvel Studios"},
            {title:"Avengers",year:2012, production_Company:"Marvel Studios"},
            {title:"Thor",year:2011, production_Company:"Marvel Studios"}
          ];

filmRouter.get("/:id", function (req, res) {
  let index = req.params.id;
  res.json({data: films[index]});
});

filmRouter.get("/", function (req, res) {
  res.json(films);
});

filmRouter.post("/", function (req, res) {
  films.push(req.body.film);
  res.json(films);
});

filmRouter.put("/:id", function (req, res) {
  let index = req.params.id;
  films[index] = req.body.film;
  res.json(films);
});

filmRouter.delete("/:id", function (req, res) {
  let index = req.params.id;
  films.splice(index, 1);
  res.json(films);
});

module.exports = filmRouter;
