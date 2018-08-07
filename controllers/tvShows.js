const express = require('express');
const tvShowRouter = new express.Router();

// let tvShows = ["Musketeers", "The Big Bang Theory", "Doctor Who", "Simpsons"];

let tvShows = [
  {title: "The Musketeers", genre: "Action", series: 3, episodes: 30},
  {title: "The Big Bang Theory", genre: "Sitcom", series: 11, episodes: 255},
  {title: "Doctor Who", genre: "Scifi", series: 36, episodes: 840},
  {title: "Simpsons", genre: "Animated Sitcom", series: 29, episodes: 639}
]

tvShowRouter.get("/", function (req, res) {
  res.json(tvShows);
});

tvShowRouter.get("/:id", function (req, res) {
  let index = req.params.id;
  res.json({data: tvShows[index]});
});

tvShowRouter.post("/", function (req, res) {
  tvShows.push(req.body.tvShow);
  res.json(tvShows);
});

tvShowRouter.put("/:id", function (req, res) {
  let index = req.params.id;
  tvShows[index] = req.body.tvShow;
  res.json(tvShows);
});

tvShowRouter.delete("/:id", function (req, res) {
  let index = req.params.id;
  tvShows.splice(index, 1);
  res.json(tvShows);
});

module.exports = tvShowRouter;
