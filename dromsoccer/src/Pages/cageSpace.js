import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class CageSpace extends React.Component {
    constructor() {
        super();
        this.Deletecage = this.Deletecage.bind(this);
    }
    Deletecage(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/cage/' + this.props.cage._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.cage.class.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer>
                                {this.props.cage.time}
                                {this.props.cage.staff}
                                {this.props.cage.notes}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    
                    <Button variant="danger" onClick={this.Deletecage}>Delete</Button>
                </Card>
            </div>
        );
    }
}