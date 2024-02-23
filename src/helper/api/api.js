import axiosClient from "./axiosClient";

const apiProducts = {
  getProducts(amount, skip) {
    return axiosClient.get("products?limit=" + amount + "&skip=" + skip);
  },
  getAllProducts() {
    return axiosClient.get("products?limit=100");
  },
  getSingleProduct(id) {
    return axiosClient.get("products/" + id);
  },
  getProductsCategory(category) {
    return axiosClient.get("products/category/" + category);
  },
  getProductsCategories() {
    return axiosClient.get("products/categories");
  }
};

export default apiProducts;


// Azamat