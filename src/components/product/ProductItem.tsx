import React from 'react';
import {IProductItem} from "../types/product.interface";

interface ProductItemProps {
    product: IProductItem;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = ({product}) => {
    return (
        <div key={product.id} id={product.id.toString()}>
            Name - {product.name}
        </div>
    );
};

export default ProductItem;