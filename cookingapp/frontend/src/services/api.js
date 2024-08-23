import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const getPopularRecipes = () => {
  return axios.get(`${API_URL}popular-recipes/`);
};

export const getIdeas = () => {
  console.log("Fetching ideas from:", `${API_URL}ideas/`);
  return axios.get(`${API_URL}ideas/`).catch((error) => {
    console.error("Error in getIdeas:", error.response || error);
    throw error;
  });
};

export const submitIdea = (idea) => {
  console.log("Submitting idea to:", `${API_URL}ideas/`);
  return axios.post(`${API_URL}ideas/`, { content: idea }).catch((error) => {
    console.error("Error in submitIdea:", error.response || error);
    throw error;
  });
};

export const getNames = () => {
  console.log("Fetching name from:", `${API_URL}interest/`);
  return axios.get(`${API_URL}interest/`).catch((error) => {
    console.error("Error in getNames:", error.response || error);
    throw error;
  });
};

export const submitName = ({ name, email }) => {
  console.log("Submitting name and email to:", `${API_URL}interest/`);
  return axios.post(`${API_URL}interest/`, { name, email }).catch((error) => {
    console.error("Error in submitName:", error.response || error);
    throw error;
  });
};
