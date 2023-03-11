import React from "react";
import { Cages } from "./cages";
import axios from "axios";

export class CageView extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCagename = this.onChangeCagename.bind(this);
        this.onChangeCagetime = this.onChangeCagetime.bind(this);
        this.onChangeCagestaff = this.onChangeCagestaff.bind(this);
        this.onChangeCagenotes = this.onChangeCagenotes.bind(this);

        this.state = {
            name: '',
            time: '',
            staff: '',
            notes: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.name},
        ${this.state.time},
        ${this.state.staff},
        ${this.state.notes}`);

        const cage = {
            name: this.state.name,
            time: this.state.time,
            staff: this.state.staff,
            notes: this.state.notes
        }

        axios.post('http://localhost:4000/api/cages', cage)
            .then()
            .catch();

        this.setState({
            name: '',
            time: '',
            staff: '',
            notes: ''
        })
    }

    onChangeCagename(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeCagetime(e) {
        this.setState({
            time: e.target.value
        })
    }

    onChangeCagestaff(e) {
        this.setState({
            staff: e.target.value
        })
    }

    onChangeCagenotes(e) {
        this.setState({
            notes: e.target.value
        })
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
                <h3>Drom viewing page</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add name : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeCagename}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add time: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.time}
                            onChange={this.onChangeCagetime}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add staff: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.staff}
                            onChange={this.onChangeCagestaff}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add notes: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.notes}
                            onChange={this.onChangeCagenotes}
                        />
                    </div>

                    <input type="submit" value="Add cage" />
                </form>

                {/* <Cages cages={this.state.cages} Reload={this.componentDidMount}></Cages> */}
            </div>

            
        );
    }
}