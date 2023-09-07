import axios from "axios";

/**
 * 3000 = Client
 * 3005 = Server (local) or 
 * 3005 = Server (Azure) with create-react-app's build folder copied to server's public folder
 */
const baseUrl = `${import.meta.env.API_BASE_URL || 'http://localhost:3005'}`;

console.log(`API SERVER: ${baseUrl}`)

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
