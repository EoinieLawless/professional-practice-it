import React from "react";
import { Cages } from "./cages";
import axios from "axios";
import Cookies from 'react-cookies';

export class ViewingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cages: [],
            isLoggedIn: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/cages')
            .then((response) => {
                this.setState({ cages: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

        const loggedIn = Cookies.load('loggedIn');
        if (loggedIn === 'true') {
            this.setState({ isLoggedIn: true });
        }
    }


    handleDeleteCage = (id) => {
        axios.delete(`http://localhost:4000/api/cages/${id}`)
            .then(() => {
                this.setState({ cages: this.state.cages.filter(cage => cage._id !== id) });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    Reload = () => {
        axios.get('http://localhost:4000/api/cages')
            .then((response) => {
                this.setState({ cages: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        // Sort the cages array by time in ascending order
        const sortedCages = this.state.cages.sort((a, b) => new Date(a.time) - new Date(b.time));

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', float: 'centre' }}>
                {sortedCages.map((cage, index) => (
                    <div key={index} style={{ width: 'calc(33.33% - 20px)', marginRight: '20px', marginBottom: '20px' }}>
                        <Cages cages={[cage]} Reload={() => this.componentDidMount()}isLoggedIn={this.state.isLoggedIn} handleDeleteCage={this.handleDeleteCage} />
                    </div>
                ))}
            </div>
        );
    }
}