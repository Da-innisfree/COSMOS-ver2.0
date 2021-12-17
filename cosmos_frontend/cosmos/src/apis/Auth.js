//import axios from "axios";
import service from "../service/request.js"

const PRODUCT_API_BASE_URL = "http://localhost:8080";

class AuthApi {
    // signUp(user){
    //     return axios.post(PRODUCT_API_BASE_URL+'/signup', user);
    // }
    signUp(){
        return service.get(PRODUCT_API_BASE_URL+'/signup');
    }

    signIn(user){
        return service.post(PRODUCT_API_BASE_URL+'/signin', user);
    }

}

export default new AuthApi();