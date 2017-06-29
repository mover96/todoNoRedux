import * as React from 'react';

import { product } from '../interfaces/product';

import { SearchBar } from '../presentational/SearchBar';
import { ProductTable } from '../presentational/ProductTable';

export interface AppProps {
    products: product[]
}

export class App extends React.Component<AppProps, any> {
    constructor() {
        super();
        this.state = {
            filter: '',
            onlyStocked: false 
        }
    }
    updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            filter: e.target.value
        });
    }
    toggleStocked = () => {
        var stocked = !this.state.onlyStocked
        this.setState({
            onlyStocked: stocked
        });
    }
    render() {
        return <div>
            <SearchBar updateFilter={this.updateFilter} toggleStocked={this.toggleStocked}/>
            <ProductTable 
                products={this.props.products} 
                filter={this.state.filter}
                onlyStocked={this.state.onlyStocked}
            />
        </div>
    }
}