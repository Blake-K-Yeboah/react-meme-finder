import React, { useEffect } from 'react'

import Search from '../Search';
import Spinner from '../Spinner';
import MemeList from './MemeList';

import { inject, observer } from 'mobx-react';

const Memes = inject("memeStore")(observer(({ memeStore }) => {

    useEffect(() => {
        memeStore.fetchMemes();
    }, [memeStore]);

    return (
        <React.Fragment>
            <h1 className="title">Search For Your Favourite Meme</h1>
            <Search />
            <h1 className="title">Results ({memeStore.activeMemes ? memeStore.activeMemes.length : 'Loading'} memes found)</h1>
            {memeStore.activeMemes ? <MemeList /> : <Spinner />}
        </React.Fragment>
    )
}))

export default Memes
