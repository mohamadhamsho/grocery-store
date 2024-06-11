const { default: axiosClient } = require("./axiosClient");
const { default: axios } = require("axios");

const getLatestProducts = () => axiosClient.get("/products?populate=*");
const getCategories = () => axiosClient.get("/categories?populate=*");
const getSliders = () => axiosClient.get("/sliders?populate=*");

const getProductByID = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProducts,
  getProductByID,
  getProductByCategory,
  getCategories,
  getSliders,
};
