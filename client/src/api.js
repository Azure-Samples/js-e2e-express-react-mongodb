import axios from "axios";

/**
 * Use package.json `proxy` property to send request to
 * Express.js server
 */

/**  
 * If using environment variable value, 
 * local client can go against production API server.
 * If using empty string, Prod client goes 
 * against same server via proxy.
*/ 
const baseUrl = process.env.REACT_APP_API_BASE_URL || "";

export const status = async () => {
  try {
    // returns server config for DB
    const response = await axios.get(`${baseUrl}/state`);

    return response.data;
  } catch (ex) {
    return {
      error: ex.message,
    };
  }
};

export const getList = async () => {
  const response = await axios.get(`${baseUrl}/list`);
  return response.data.data;
};

export const addToList = async (item) => {
  if (!item) throw new Error("item is empty");

  return await axios.post(`${baseUrl}/item`, item);
};

export const deleteList = async () => {
  return await axios.delete(`${baseUrl}/list`);
};

export const deleteItem = async (id) => {
  if (!id) throw new Error("id is empty");

  return await axios.delete(`${baseUrl}/item`, { data: { id } });
};
