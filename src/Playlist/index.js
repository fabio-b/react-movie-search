import React from 'react';

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
        this.handleAddMovieTitle = this.handleAddMovieTitle.bind(this);
        this.handleRemoveTitle = this.handleRemoveTitle.bind(this);

        this.state = {
            tempMovieTitle: '',
            movieList: []
        }
    }

    handleMovieTitleChange(e) {
        this.setState({ tempMovieTitle: e.target.value });
    }

    handleAddMovieTitle() {
        if(!this.state.tempMovieTitle) {
            return;
        }
        this.setState((prevState) => ({
            tempMovieTitle: '',
            movieList: [...prevState.movieList, prevState.tempMovieTitle]
        }));
    }

    handleRemoveTitle(index) {
        this.setState((prevState) => ({
            movieList: prevState.movieList.filter((movie, i) => i !== index)
        }));
    }

    render() {
        return (
            <div className="my-3">
                <h2>Add movies to watchlist</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                        <label className="input-group-text">
                            Movie title
                        </label>
                        <input type="text" value={this.state.tempMovieTitle} className="form-control" placeholder="eg. Elf" onChange={this.handleMovieTitleChange} />
                        <button className="btn btn-outline-secondary" onClick={this.handleAddMovieTitle} disabled={!this.state.tempMovieTitle}>Add</button>
                        </div>
                    </div>
                    {this.state.movieList.length > 0 && (
                    <div className="col-md-6">
                        <h3>To Watch</h3>
                        <ul className="list-group list-group-numbered">
                            {this.state.movieList.map((movie, i) => (
                                <li key={i} className="list-group-item">
                                    { movie }
                                    <button className="float-end btn p-0" onClick={() => this.handleRemoveTitle(i)}>&times;</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}