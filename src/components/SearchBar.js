import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
        debouncedTerm: ''
    };

    timeoutId = 0;

    onFormSubmit = (event) => {
        event.preventDefault();
        clearTimeout(this.timeoutId);
        this.props.onSearchSubmit(this.state.term);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isGameMode){
            if (prevState.term !== this.state.term && this.state.term.length===5) {
                this.props.onSearchSubmit(this.state.term);
            }
        }else {
            if (prevState.debouncedTerm !== this.state.debouncedTerm) {
                this.props.onSearchSubmit(this.state.debouncedTerm);
            }
            if (prevState.term !== this.state.term) {
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    this.setState({debouncedTerm: this.state.term})
                }, 500);
            }
        }

    }

    onInputChange = (event) => {
        this.setState({term: event.target.value.trim().toLowerCase()});
    };

    tip = () => this.props.isGameMode ? 'Type a word...':'Search words...';

    render() {
        return (
            <div className="search-bar ui segment">

                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">

                        <input type="text" className="prompt" placeholder={this.tip()}
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
