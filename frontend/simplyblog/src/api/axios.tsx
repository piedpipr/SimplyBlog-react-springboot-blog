import axios from "axios";

export default axios.create({
    baseURL: 'https://simplyblog-backend.herokuapp.com',
})
