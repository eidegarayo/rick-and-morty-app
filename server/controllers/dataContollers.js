/* https://rickandmortyapi.com/documentation
 * Base url: https://rickandmortyapi.com/api
 * "characters": "https://rickandmortyapi.com/api/character",
 * "locations": "https://rickandmortyapi.com/api/location",
 * "episodes": "https://rickandmortyapi.com/api/episode"
 */
const axios = require('axios');

const apiUrl = 'https://rickandmortyapi.com/api/';

const getHomeImages = async (req, res) => {
  const url = `${apiUrl}character`;
  try {
    const response = await axios({
      method: 'get',
      url,
    });
    const { statusText, data } = response;
    if (statusText !== 'OK') {
      res.status(500).json({ message: 'error' });
      return;
    }
    const images = data?.results?.map((item) => item.image);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getCharacterList = async (req, res) => {
  const { page } = req.query;
  const url = page ? `${apiUrl}character?page=${page}` : `${apiUrl}character?page=0`;

  try {
    const response = await axios({
      method: 'get',
      url,
    });
    const { statusText, data } = response;
    if (statusText !== 'OK') {
      res.status(500).json({ message: 'error' });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(200).send({ message: 'NO id' });
  }

  const url = `${apiUrl}character/${id}`;

  try {
    const response = await axios({
      method: 'get',
      url,
    });
    const { statusText, data } = response;
    if (statusText !== 'OK') {
      res.status(500).json({ message: 'error' });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getHomeImages,
  getCharacterList,
  getCharacter,
};
