// src/service/api.js
import axios from "axios";

const API_URL = "http://localhost:3002/events";

export const getAllEvents = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Erreur récupération événements", error);
    return [];
  }
};

export const getEventById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Erreur récupération événement", error);
    return null;
  }
};

export const addEvent = async (event) => {
  try {
    const res = await axios.post(API_URL, event);
    return res.data;
  } catch (error) {
    console.error("Erreur ajout", error);
  }
};

export const updateEvent = async (id, event) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, event);
    return res.data;
  } catch (error) {
    console.error("Erreur mise à jour", error);
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Erreur suppression", error);
    return false;
  }
};