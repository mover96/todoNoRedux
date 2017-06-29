import * as React from 'react';

import {product} from '../interfaces/product';

export interface ProductCatagoryRowProps {
    catagory: string,
    key: string
}

export const ProductCatagoryRow: React.SFC<ProductCatagoryRowProps> = (props) => {
    const styles: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: '20px'
    }
    return <tr>
        <td colSpan={2} style={styles}>{props.catagory}</td>
    </tr>
}