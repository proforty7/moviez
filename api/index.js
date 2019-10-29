import Axios from "axios";
import { API_KEY } from "../config/keys";

export default Axios.create({
  baseURL: "https://api.themoviedb.org/3"
});
