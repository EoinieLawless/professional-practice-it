import React from "react";
import axios from "axios";

export class InputPage extends React.Component {
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
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>

                    <div style={{
                        padding: '20px',

                        float: "centre",

                        margin: '0 auto'
                    }}>
                        <h3>Input Page for staff</h3>

                        <p> Insert All proper information </p>

                        <p> Delete all submissions end of the Day</p>

                        <p> Write down your name if You are working for the Day </p>

                        <p> No Time submissions past 22:00</p>

                        <p>Try and write time in digital format</p>

                        <p>Service With a smile :)</p>


                    </div>

                    <div style={{
                        border: '1px solid black',
                        padding: '20px',
                        width: '50%',
                        display: "inline-block",
                        width: "300px",
                        margin: '0 auto'
                    }}>


                        <h3>Drom Booking Section</h3>
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label>Add Email : </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeCagename}
                                    required

                                />
                            </div>

                            <div className="form-group">
                                <label>Add time: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.time}
                                    onChange={this.onChangeCagetime}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Add staff: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.staff}
                                    onChange={this.onChangeCagestaff}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Cage Number: </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.notes}
                                    onChange={this.onChangeCagenotes}

                                />
                            </div>
                            <br></br>

                            <input type="submit" value="Add cage" />




                        </form>
                    </div>

                </div>




            </div>
        );

    }

}