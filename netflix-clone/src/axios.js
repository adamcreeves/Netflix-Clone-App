import axios from "axios";

/* base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// this is how it works
// instance.get('/example') -> https://api.themoviedb.org/3/example

export default instance; // <- When you use 'default', when you import 
                         //    this variable from "./axios", you can name
                         //    it whatever you want 
                         // ** Also, you can only have 1 'default' in each file.