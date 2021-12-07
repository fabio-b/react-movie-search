import React from 'react';
import { OMDB_API_KEY } from '../app-keys';
import DisplaySearch from './DisplaySearch';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            data: {}
        }
    }

    handleInputChange(e) {
        const name = e.target.value;
        this.setState({ name });
    }

    handleSubmit() {
        fetch(`http://www.omdbapi.com/?t=${this.state.name}&apikey=${OMDB_API_KEY}&`).then(res => res.json()).then((data) => {
            this.setState({ data });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="my-3">
                    <label className="form-label pe-2">Search Movie</label>
                    <input type="text" placeholder="eg. Elf" onChange={this.handleInputChange} />
                    <button className="btn btn-primary ms-2" onClick={this.handleSubmit}>Search</button>
                </div>
                <div className="text-start">
                    <DisplaySearch data={this.state.data} />
                </div>
            </React.Fragment>
        )
    }
}