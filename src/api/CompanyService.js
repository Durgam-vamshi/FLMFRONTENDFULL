import axios from "axios";

const BASE_URL = "https://flmbackendproj-2.onrender.com/api/companies"

export const fetchCompanies = async (filters = {}) => {
  const res = await axios.get(BASE_URL, { params: filters });
  return res.data;
};
