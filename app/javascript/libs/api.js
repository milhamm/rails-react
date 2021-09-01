import axios from "axios";

const token = document.querySelector('meta[name="csrf-token"]').content;

export default axios.create({
  baseURL: "/api/v1",
  headers: {
    "X-CSRF-Token": token,
  },
});
