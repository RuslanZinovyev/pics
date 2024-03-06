import axios from "axios";

const searchImages = async (input) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 3SkEVYSJUJd0hjM2sxa_xBxUjgJ7LMcZNLgAu6aPS1Y",
    },
    params: {
      query: input,
    },
  });

  return response.data.results;
};

export default searchImages;
