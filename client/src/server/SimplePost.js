import axios from 'axios';

export const simplePost = async (url, body) =>{
  const response = await axios.post(url, body)
  return response;
}