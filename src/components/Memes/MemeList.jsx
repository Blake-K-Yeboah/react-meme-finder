import React from 'react';

import { inject, observer } from 'mobx-react';

import Meme from './Meme';

const MemeList = inject("memeStore")(observer(({ memeStore }) => {
    return (
        <ul className="meme-list">
            {memeStore.activeMemes ? memeStore.activeMemes.map(meme => {
                return <Meme meme={meme} key={meme.id} />
            }) : ''}
        </ul>
    )
}))

export default MemeList;