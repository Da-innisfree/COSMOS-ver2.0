import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080";

class authApi {
    signUp(user){
        return axios.post(PRODUCT_API_BASE_URL+'/signup', user);
    }

}

export default new authApi();