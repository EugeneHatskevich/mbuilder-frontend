import React, {useState} from 'react';
import {IProductItem} from "../types/product.interface";
import ProductItem from "./ProductItem";

interface ProductItemListProps {

}

const ProductItemList: React.FunctionComponent<ProductItemListProps> = () => {
    const [products, setProducts] = useState<IProductItem[]>([])

    // useEffect(() => {
    //     getProducts().then(r => r)
    // }, [])

    // async function getProducts() {
    //     try {
    //         const login = await axios.post('http://localhost:7000/auth/login', {email: 'parkour.trayball@gmail.com', password: 'admin'})
    //
    //         const response = await axios.get('http://localhost:7000/products', {
    //             headers: {
    //                 'Authorization': `Bearer ${login.data.accessToken}`
    //             }
    //         })
    //
    //         setProducts(response.data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return (
        <div>
            {products.map(product =>
                <ProductItem product={product}/>
            )}
        </div>
    );
};

export default ProductItemList;