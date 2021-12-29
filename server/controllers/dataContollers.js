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
      res.status(500).json({ error: true, message: 'error' });
      return;
    }
    const images = data?.results?.map((item) => item.image);
    res.status(200).json({ success: true, images });
  } catch (error) {
    res.status(500).json({ error: true, message: error });
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
      res.status(500).json({ error: true, message: 'API error' });
      return;
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: true, message: error });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(200).send({ error: true, message: 'NO id' });
  }

  const url = `${apiUrl}character/${id}`;

  try {
    const response = await axios({
      method: 'get',
      url,
    });
    const { statusText, data } = response;
    if (statusText !== 'OK') {
      res.status(500).json({ error: true, message: 'API error' });
      return;
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    if (error.response && error.response.status === '404') {
      res.status(400).send({ error: true, message: 'wrong id' });
    } else {
      res.status(500).json({ error: true, message: error });
    }
  }
};

module.exports = {
  getHomeImages,
  getCharacterList,
  getCharacter,
};
