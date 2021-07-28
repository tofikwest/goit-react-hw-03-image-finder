import axios from "axios";

const fetchPixaBay = async (yourword, page = 1) => {
  const get = await axios.get(
    `https://pixabay.com/api/?q=${yourword}&page=${page}&key=22355428-bdc6eaf2c1f0229d27359a629&image_type=photo&orientation=horizontal&per_page=12`
  );
  return get;
};

export default fetchPixaBay;
