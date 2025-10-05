import axios from "axios";

const API_URL = "http://localhost:5277/api"; 

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/User/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/User/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
