const axios = require("axios");

exports.searchBooks = async (req, res) => {
  const { token, bookTitle } = req.body;

  console.log(req.body);

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&Authorization=${token}`
    );

    res.json(response.data);
  } catch (err) {
    return res.json({
      message:
        "Desculpe, mas ocorreu um problema ao tentar buscar os livros :/",
    });
  }
};
