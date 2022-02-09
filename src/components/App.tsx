import React from 'react';
import SearchBar from "./SearchBar";
class App extends React.Component {
    constructor(props:any){
        super(props);
    }

    onSearchSubmit = (word:string)=>{
      console.log(word);
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined {
        return (
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        );
    }
}
export default App;
