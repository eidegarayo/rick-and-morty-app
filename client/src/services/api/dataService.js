import axios from 'axios';

const API_URL = 'http://localhost:8080/api/data/';

const getHomeImages = async (callback) => {
  const url = `${API_URL}home-images`;

  try {
    const response = await axios({
      method: 'get',
      url,
      headers: { 'Content-Type': 'application/json' },
    });
    const { data } = response;
    return callback(null, data);
  } catch (error) {
    console.log("🚀 ~ file: dataService.js ~ line 14 ~ getHomeImages ~ error", error)
    return error;
  }
}

const getCharacterList = async (page = 0) => {
  // sanitize
  const url = `${API_URL}character-list?page=${page}`;

  try {
    const response = await axios({
      method: 'get',
      url,
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    console.log("🚀 ~ file: dataService.js ~ line 33 ~ getCharacterList ~ error", error)
    return error;
  }
}

const getCharater = async (id) => {
  // sanitize
  const url = `${API_URL}character/${id}`;

  try {
    const response = await axios({
      method: 'get',
      url,
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    console.log("🚀 ~ file: dataService.js ~ line 50 ~ getCharater ~ error", error)
    return error;
  }
}

export {
  getHomeImages,
  getCharacterList,
  getCharater,
};
