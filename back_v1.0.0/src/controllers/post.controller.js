class PostController {
  addPost = (req, res) => {
    // TODO
    return res.status(200).send({
      message: 'post seccess',
    });
  };

  getPosts = (req, res) => {
    const { category } = req.params;

    return res.status(200).send({
      message: category,
    });
  };

  updatePosts = (req, res) => {
    // TODO
    return res.status(200).send({
      message: 'get seccess',
    });
  };

  deletePosts = (req, res) => {
    // TODO
    return res.status(200).send({
      message: 'get seccess',
    });
  };
}

module.exports = PostController;
