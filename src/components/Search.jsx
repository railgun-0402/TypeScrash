import * as React from 'react';

import './Search.css';

const Search = ({ onSearchSubmit }) => {
    const [term, setTerm] = React.useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        onSearchSubmit(term);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                className='Search'
                value={term}
                placeholder='検索'
                onChange={e => setTerm(e.target.value)}
            />
        </form>
    );
};
export default Search;