import service from "../service/request.js"

const PRODUCT_API_BASE_URL = "http://localhost:8080";

class ProductApi {

    //상품 리스트
    getProductList(gender, category){
        return service.get(PRODUCT_API_BASE_URL+"/"+gender+"/"+category)
    }

    //상세 상품정보
    getProductDetail(id){

    }

    //카테고리 디테일
    getCategoryDetail(gender, category){
        return service.get(PRODUCT_API_BASE_URL+"/"+gender+"/"+category+"/detail")
    }
}

export default new ProductApi();