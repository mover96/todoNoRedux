import * as React from 'react';

import {product} from '../interfaces/product';

export interface ProductRowProps {
    product: product,
    key: string
}

export const ProductRow: React.SFC<ProductRowProps> = (props) => {
    var name: JSX.Element;
    if (props.product.stocked) {
        name = <span>{props.product.name}</span>
    } else {
        name = <span style={{color: 'red'}}>
            {props.product.name}
        </span>
    }
    return <tr>
        <td>{name}</td>
        <td>{props.product.price}</td>
    </tr>
}