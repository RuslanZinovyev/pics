import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PdhqQMRVRLpF359aLFiTtwYSTV6V4VHvD3oDpnQPx4k",
  },
});
