import React from 'react';
import SearchBar from "./SearchBar";
import SearchedWord from "./SearchedWord";
import './App.css';
import {searchWords} from '../ressources/helper';
import EntreeWord from './EntreeWord';
import Trash from './Trash';
import EntreeComponent from './EntreeComponent';

class App extends React.Component {
    state = {
        suggestedWords: [],
        searchedWord: '',
        selectedWord: null,
        entries: [{
            word: 'wrenc',
            hint: [1, 2, 1, 2, 0]
        },
            {
                word: 'suite',
                hint: [1, 0, 0, 0, 2]
            }]
    };

    onSearchSubmit = async (searchedWord) => {

        this.setState({searchedWord});
        const words = await searchWords(searchedWord);
        this.setState({suggestedWords: words});
    };
    onSelectWord = (word) =>{
        const  newEntries = [...this.state.entries,{
            word,
            hint:[0,0,0,0,0]
        }];
        this.setState({entries:newEntries});
    };

    deleteEntree = (id) => {
        const  newEntries = [...this.state.entries];
        newEntries.splice(id,1);
        this.setState({entries:newEntries});
    };
    setActive = (word,letter)=>{
        console.log(word, letter);
        const  newEntries = [...this.state.entries];
        let ind = newEntries[word].hint[letter];
        if(++ind > 2) ind = 0;
        newEntries[word].hint[letter] = ind;
        this.setState({entries:newEntries});
    };

    render() {

        return (
            <div>
                <label>Wordy buddy</label>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <EntreeComponent
                    entries={this.state.entries}
                    deleteEntree={this.deleteEntree}
                    setActive={this.setActive}
                />
                <SearchedWord words={this.state.suggestedWords} selectedWord={this.onSelectWord}/>

            </div>
        );
    }
}

export default App;
