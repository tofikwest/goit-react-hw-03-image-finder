import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
  key: "22355428-bdc6eaf2c1f0229d27359a629",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

const fetchImages = async (searchQuery, page) => {
  try {
    const { data } = await axios.get("", {
      params: {
        q: searchQuery,
        page,
      },
    });
    return data.hits;
  } catch (error) {
    return error;
  }
};

const imagesAPI = {
  fetchImages,
};

export default imagesAPI;
