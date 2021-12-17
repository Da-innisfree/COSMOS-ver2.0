import service from "../service/request.js"

const PRODUCT_API_BASE_URL = "http://localhost:8080";

class AuthApi {
    // signUp(user){
    //     return axios.post(PRODUCT_API_BASE_URL+'/signup', user);
    // }
    test(){
        return service.get(PRODUCT_API_BASE_URL+'/test');
    }

    signIn(user){
        return service.post('/signin', user);
    }

}

export default new AuthApi();