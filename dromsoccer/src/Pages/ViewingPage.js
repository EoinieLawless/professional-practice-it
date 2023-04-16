import React from "react";
import { Cages } from "./cages";
import axios from "axios";

export class ViewingPage extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cages')
            .then((response) => {
                this.setState({ cages: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        cages: []
    }

    render() {
        // Sort the cages array by time in ascending order
        const sortedCages = this.state.cages.sort((a, b) => new Date(a.time) - new Date(b.time));
    
        return (
            <div style={{ display: 'flex'}}>
                {sortedCages.map((cage, index) => (
                    <div key={index} style={{ width: 'calc(33.33% - 20px)', marginRight: '20px', marginBottom: '20px' }}>
                        <Cages cages={this.state.cages} Reload={this.componentDidMount}></Cages>
                    </div>
                ))}
            </div>
        );
    }
}