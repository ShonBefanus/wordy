import React from 'react';
import SearchBar from "./SearchBar";
import ListWord from "./ListWord";
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            words: []
        }
    }

    onSearchSubmit = (word)=>{
      console.log(word);
    };

    render() {
        return (
            <div>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ListWord words={this.state.words}/>
            </div>
        );
    }
}
export default App;
