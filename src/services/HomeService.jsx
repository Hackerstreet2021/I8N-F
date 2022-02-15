import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:6872/products";

class HomeService {  

    createProduct(product,formData) {        
        return axios.post(PRODUCT_API_BASE_URL, product,formData);          
    }

  

}

export default new HomeService();