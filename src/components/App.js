import React from 'react';
import SearchBar from "./SearchBar";
import SearchedWord from "./SearchedWord";
import './App.css';
import {searchWords} from '../ressources/helper';
import EntreeComponent from './EntreeComponent';
import solution from '../ressources/solution';
import Reset from './Reset';

class App extends React.Component {
    state = {
        suggestedWords: [],
        searchedWord: '',
        selectedWord: null,
        start: false,
        favorite: [],
        entries: []
    };

    componentDidMount() {
        this.solution();
        // const unsafeFavorite = localStorage.getItem('favorite');
        // console.log(unsafeFavorite);
        // try {
        //     if (unsafeFavorite) {
        //         const favorite = unsafeFavorite.split(',');
        //         console.log(favorite);
        //         this.setState({
        //             favorite,
        //             entrees: favorite.map(word => {
        //                 return {
        //                     word,
        //                     hint: [0, 0, 0, 0, 0]
        //                 }
        //             })
        //         });
        //     }
        // } catch (e) {
        // } finally {
        //
        // }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.entries !== this.state.entries && this.state.entries.length > 0 &&
            this.state.start) {
            this.solution();
        }
        if (prevState.searchedWord !== this.state.searchedWord) {
            searchWords(this.state.searchedWord).then((words) => {
                this.setState({suggestedWords: words});
            });
        }
        if (prevState.favorite !== this.state.favorite) {
            localStorage.setItem('favorite', this.state.favorite);
        }
    }

    onSearchSubmit = async (searchedWord) => {

        this.setState({searchedWord});


    };
    onSelectWord = (word) => {
        const newEntries = [...this.state.entries, {
            word,
            hint: [0, 0, 0, 0, 0],
            isFavorite:this.state.favorite.indexOf(word)!== -1
        }];
        this.setState({entries: newEntries, start: true});
    };

    solution() {
        const newSuggestion = solution(this.state.entries);
        this.setState({suggestedWords: newSuggestion});
    };

    deleteEntree = (id) => {
        const newEntries = [...this.state.entries];
        newEntries.splice(id, 1);
        if (newEntries.length === 0) {
            this.setState({start: false});
        }
        this.setState({entries: newEntries});


    };
    setActive = (word, letter) => {
        const newEntries = [...this.state.entries];
        let ind = newEntries[word].hint[letter];
        if (++ind > 2) ind = 0;
        newEntries[word].hint[letter] = ind;
        this.setState({entries: newEntries, start: true});
    };

    onFavoriteClick = (id) => {
        const word = this.state.entries[id].word;
        const favorite = this.state.favorite;
        const isFavorite = favorite.indexOf(word) !== -1;
        let newFavorite;
        if (isFavorite) {
            newFavorite = favorite.filter(e => e !== word );
        } else {
            newFavorite =  [...favorite, word];
        }
        const newEntrees = [...this.state.entrees];
        newEntrees[id].isFavorite = !isFavorite;
        this.setState({
            entrees:[...this.state.entrees,],
            favorite:newFavorite
        });
    };
    onResetClick = ()=>{
        this.setState({
            start:true,
            entrees:
            this.state.favorite.map(word =>{
                return {
                    word,
                    hint:[0,0,0,0,0],
                    isFavorite:true
                }
            })
        })
    };

    render() {

        return (
            <div>
                <Reset isActive={true} onClick={this.onResetClick}/>
                <h3 className="ui header title">Wee buddy</h3>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui two column grid">
                    <EntreeComponent
                        entries={this.state.entries}
                        deleteEntree={this.deleteEntree}
                        setActive={this.setActive}
                        onFavoriteClick={this.onFavoriteClick}
                    />
                    <SearchedWord words={this.state.suggestedWords} selectedWord={this.onSelectWord}/>
                </div>

            </div>
        );
    }
}

export default App;
