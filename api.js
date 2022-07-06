import axios from "axios";

const api = axios.create({
    baseURL:'https://sistema-aprendizes-brisanet-go.herokuapp.com/pessoas/'
});

export default api;