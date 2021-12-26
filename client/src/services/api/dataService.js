import axios from 'axios';

import { addHeaders, catchErrors, catchResponse } from './utils';
import { config } from './config';

const API_URL = `${config.baseUrl}data/`;

const getHomeImages = async (callback) => {
  const url = `${API_URL}home-images`;
  const headers = addHeaders();

  try {
    const response = await axios({
      method: 'get',
      url,
      headers,
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: dataService.js ~ line 14 ~ getHomeImages ~ error', error);
    return catchErrors.api(error, callback);
  }
};

const getCharacterList = async (page = 0, callback) => {
  // sanitize
  const url = `${API_URL}character-list?page=${page}`;
  const needAuth = true;
  const headers = addHeaders(needAuth);

  try {
    const response = await axios({
      method: 'get',
      url,
      headers,
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: dataService.js ~ line 33 ~ getCharacterList ~ error', error);
    return catchErrors.api(error, callback);
  }
};

const getCharacter = async (id, callback) => {
  // sanitize
  const url = `${API_URL}character/${id}`;
  const needAuth = true;
  const headers = addHeaders(needAuth);

  try {
    const response = await axios({
      method: 'get',
      url,
      headers,
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: dataService.js ~ line 50 ~ getCharacter ~ error', error);
    return catchErrors.api(error, callback);
  }
};

export {
  getHomeImages,
  getCharacterList,
  getCharacter,
};
