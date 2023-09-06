const { Router } = require("express");
const { Post } = require("../models");
const { pickRandomWord } = require("../utils/random-word");

const router = Router();

router.get("/generate", async (req, res, next) => {
  //generate라는 경로가 설정되어있음.
  const title = pickRandomWord();
  const content = pickRandomWord();

  try {
    const post = await Post.create({
      //random으로 title, content를 create 해줌
      title,
      content,
    });

    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  //root가 설정되어있음.
  try {
    const posts = await Post.find({});

    res.json(posts);
    //posts에서 find검색하면 json으로 파일을 보냄.
  } catch (err) {
    next(err);
  }
});

module.exports = router;
