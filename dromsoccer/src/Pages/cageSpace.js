import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
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

            <span>
                <CardGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ marginRight: '20px', marginBottom: '20px' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>{this.props.cage.name}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <footer>
                                        <Card.Text>{this.props.cage.time}</Card.Text>
                                        <Card.Text>{this.props.cage.staff}</Card.Text>
                                        <Card.Text>{this.props.cage.notes}</Card.Text>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                            <Button variant="danger" onClick={this.Deletecage}>Delete</Button>
                        </Card>
                    </div>
                </CardGroup>
            </span>
        );
    }
}