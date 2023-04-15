import React from "react";
import { Cages } from "./cages";
import axios from "axios";

export class CageView extends React.Component {
    constructor() {
        super();
        // this.componentDidMount = this.componentDidMount.bind(this);
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


    render() {
        return (
            <div>

                <div style={{
                    padding: '20px',

                    float: "left",

                    margin: '0 auto'
                }}>
                    <h3>Drom Soccer Park Galway</h3>

                    <p>
                        Salthill Devon Football Club is an Irish football club based in Salthill, a suburb of Galway City in the west of Ireland. The club was founded in 1977 and has grown to become one of the most successful and widely supported football clubs in the west of Ireland.
                    </p>

                    <p>
                        Salthill Devon has a proud history of developing young footballers, with many of its players going on to play at a professional level both in Ireland and abroad. The club has also been successful at the senior level, winning numerous league and cup titles over the years.
                    </p>

                    <p>Salthill Devon's home ground is Drom Soccer Park, which is located on the outskirts of Galway City. The ground has undergone significant upgrades in recent years, including the installation of floodlights, improved pitch drainage, and the addition of new changing rooms and other facilities.</p>


                    <p>
                        Overall, Salthill Devon Football Club is a vital part of the Galway sporting community, and its ongoing success is a testament to the dedication and hard work of everyone involved with the club.

                    </p>
                </div>

                <div style={{
                    border: '1px solid black',
                    padding: '20px',
                    width: '50%',
                    float: "right",
                    width: "300px",
                    margin: '0 auto'
                }}>


                    <h3>Drom Booking Section</h3>
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
                </div>



            </div>
        );

    }

}