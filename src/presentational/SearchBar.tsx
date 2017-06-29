import * as React from 'react';

export interface SearchBarProps {
    updateFilter: Function
    toggleStocked: Function
}

export const SearchBar: React.SFC<SearchBarProps> = (props) => {
    return <div>
        <input type="text" placeholder="Search..." onChange={e => props.updateFilter(e)}/>
        <p>
            <input type="checkbox" onChange={e => props.toggleStocked(e)}/>
            {' '}
            Only show products in stock
        </p>
    </div>
}