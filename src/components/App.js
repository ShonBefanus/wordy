import React from 'react';
import SearchBar from "./SearchBar";
import ListWord from "./ListWord";
import './App.css';
import {searchWords} from '../ressources/helper';

class App extends React.Component {
    state = {
        words: [],
        searchWord: '3'
    };

    onSearchSubmit = async (searchWord) => {
        console.log(searchWord);
        this.setState({searchWord});

        const words = await searchWords(this.state.searchWord);
        this.setState({words});
    };

    render() {
        return (
            <div>
                <SearchBar
                    onSearchSubmit={this.onSearchSubmit}
                />
                <ListWord words={this.state.words}/>
            </div>
        );
    }
}

export default App;
