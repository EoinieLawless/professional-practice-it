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
        const containerStyle = {
            width: "100%",
        };

        const cardStyle = {
            display: "inline-block",
            width: "calc(33% - 10px)",
            margin: "5px",
        };

        return (
            <div style={containerStyle}>
                {this.state.cages.map((cage, index) => (
                    <div key={index} style={cardStyle}>
                        <Cages cages={this.state.cages} Reload={this.componentDidMount}></Cages>
                    </div>
                ))}
            </div>
        );
    }
}