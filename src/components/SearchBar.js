import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };
    onInputChange = (event) => {
        this.setState({term:event.target.value});
    };

    render(){
        return(
          <div className="search-bar ui segment">

              <form
                  className="ui form"
                  onSubmit={this.onFormSubmit}
              >
                  <div className="field">

                    <input type="text" className="prompt" placeholder="Search words..."
                           value={this.state.term}
                           onChange={this.onInputChange}
                    />
                      </div>


              </form>
          </div>
        );
    }
}
export default SearchBar;
