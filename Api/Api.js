import axios from "axios";

const url = "https://internexamplebackend.onrender.com/api";

// Create an Axios instance
const api = axios.create({
  baseURL: url, // Your backend URL
});

// Function to retrieve all data
export const fetchAllData = async () => {
  try {
    const response = await api.get("/data/all");
    return response.data; // Return the data retrieved
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw error;
  }
};

// Function to retrieve data by ID
export const fetchDataById = async (id) => {
  try {
    const response = await api.get(`/data/${id}`);
    return response.data; // Return the data for the specified ID
  } catch (error) {
    console.error(`Error fetching data for ID: ${id}, error`);
    throw error;
  }
};
