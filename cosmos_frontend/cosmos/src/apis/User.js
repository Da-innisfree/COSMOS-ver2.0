import service from "../service/request.js"

const PRODUCT_API_BASE_URL = "http://localhost:8080/user";

class UserApi {

    getUserInfo(id) {
        return service.get(PRODUCT_API_BASE_URL + '/' + id);
    }
    
    confirmPassword(password) {
        return service.post(PRODUCT_API_BASE_URL + '/confirmPassword', password);
    }

}

export default new UserApi();