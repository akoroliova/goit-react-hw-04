import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImagesWithTopic = async (topic) => {
  const response = await axios.get(`/?query=${topic}`, {
    params: {
      client_id: "TXXLBjNA6Y0y8mIKWYg-j3lvWbiYzVBzOrZb1Ht508c",
    },
  });
  return response.data.results;
};
