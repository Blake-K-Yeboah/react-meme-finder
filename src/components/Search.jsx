import React from 'react'

import { observer, inject } from 'mobx-react';

const Search = inject("memeStore")(observer(({ memeStore }) => {

    const onChange = e => {
        memeStore.setQuery(e.target.value);
        memeStore.updateMemes();
    }
    return (
        <React.Fragment>
            <input type="text" placeholder="Search..." className="search" onChange={onChange} />
        </React.Fragment>
    )
}));

export default Search
