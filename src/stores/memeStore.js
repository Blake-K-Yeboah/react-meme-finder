import { decorate, observable, action } from 'mobx';
import Axios from 'axios';

class memestore {

    memes = [];

    activeMemes = null;

    fetchMemes = () => {
        Axios.get('https://api.imgflip.com/get_memes').then(res => {
            let data = res.data;

            if (data.success) {
                this.memes = data.data.memes;
                this.activeMemes = this.memes.filter(meme => meme.name.toLowerCase().startsWith(this.query.toLowerCase()));

            } else {
                this.error = data.error_message;
            }
        })
    }

    error = null;

    query = '';

    setQuery = (newQuery) => {
        this.query = newQuery;
        console.log(this.query);
    }

    updateMemes = () => {
        this.activeMemes = this.memes.filter(meme => meme.name.toLowerCase().startsWith(this.query.toLowerCase()));
    }
}

const memeStore = new memestore();

decorate(memeStore, {
    memes: observable,
    activeMemes: observable,
    fetchMemes: action,
    error: observable,
    query: observable,
    setQuery: action,
    updateMemes: action
});

export default memeStore;