import * as React from 'react';

import { product } from '../interfaces/product';

import {ProductCatagoryRow} from './ProductCatagoryRow';
import {ProductRow} from './ProductRow';

export interface ProductTableProps {
    products: product[],
    filter: string,
    onlyStocked: boolean
}

export const ProductTable: React.SFC<ProductTableProps> = (props) => {
    var rows: JSX.Element[] = [];
    var lastCategory: string = null;
    props.products.forEach( function(product: product) {
        if (product.name.indexOf(props.filter) === -1 || (!product.stocked && props.onlyStocked)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCatagoryRow catagory={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    </div>
}