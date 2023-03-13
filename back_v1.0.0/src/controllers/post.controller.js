class PostController {
  uploadImage = async (req, res) => {
    try {
      const src = req.files;
      console.log('src: ', src);

      return res.json(src.map((v) => v.location));
    } catch (error) {
      console.log('error: ', error);
    }
  };

  addPost = (req, res) => {
    const { title, category, content, image } = req.body;

    console.log('title: ', title);
    console.log('category: ', category);
    console.log('content: ', content);
    console.log('image: ', image);

    return res.status(200).send({
      message: 'post seccess',
      title: title,
      category: category,
      content: content,
      image: image,
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
