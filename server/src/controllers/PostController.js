const Post = require('../models/Post')

module.exports = {

  async index (req, res) {
    try {
      const posts = await Post.findAll()
      res.json(posts)
    } catch (err) {
      res.status(404).json({ message: err.message })
    }
  },

  async save (req, res) {
    const { texto, data } = req.body

    try {
      const post = await Post.create({
        texto,
        data
      })
      res.json(post)
    } catch (err) {
      res.json({ message: err.message })
    }
  },

  async delete (req, res) {
    const id = req.params.id
    console.log(id)
    try {
      const post = await Post.findByPk(id)

      if (!post) {
        return res.status(400).json({ message: 'Post não encontrado' })
      }
      const deletedPost = await post.destroy()
      res.json(deletedPost)
    } catch (err) {
      res.json({ message: err.message })
    }
  }
}
