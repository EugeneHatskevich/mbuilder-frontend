import {authInstance, instance} from "./api.config";
import {ILogin} from "../components/types/login.interface";
import {IProductItem} from "../components/types/product.interface";

export class AuthService {

    public async login(email: string, password: string): Promise<ILogin> {
        return authInstance.post('auth/login', {email, password})
    }
}

export class ProductService {

    public async createProduct(product: IProductItem): Promise<IProductItem> {
        return instance.post('products', product)
    }
}