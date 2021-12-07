import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080";

class AuthApi {
    // signUp(user){
    //     return axios.post(PRODUCT_API_BASE_URL+'/signup', user);
    // }
    signUp(){
        return axios.get(PRODUCT_API_BASE_URL+'/signup');
    }

}

export default new AuthApi();