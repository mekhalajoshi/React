import React,{ Component }  from 'react'
import SearchBar from './SearchBar';
import Display from './Display';


class MovieSearch extends Component{
    
    constructor(props) {
        super(props);
        this.initialState = {
            searchTerm: '',
        };
        this.state = this.initialState;

    }

    handleSubmit= (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
        const { searchTerm } = this.state;
        return (
            <div>
                <SearchBar handelSubmit={this.handelSubmit}/>
                <Display />
            </div>
        );
    }
}

export default MovieSearch;