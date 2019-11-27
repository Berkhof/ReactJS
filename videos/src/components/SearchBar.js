import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    //callback method
    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault(); //when i hit enter on the searchbar, page doesen't refresh

        this.props.onFormSubmit(this.state.term);

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term}
                               onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
