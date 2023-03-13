import React from "react";
import { Cages } from "./cages";
import axios from "axios";

export class CageViewTestView extends React.Component {
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
        return (
            <div>
                <h3>Viewing page</h3>
               <Cages cages={this.state.cages} Reload={this.componentDidMount}></Cages>
            </div>
        );
    }
}