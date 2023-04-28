import React from "react";
import axios from "axios";
import { CageSpace } from './cageSpace';

export class Cages extends React.Component {
    handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/cage/${id}`)
            .then((res) => {this.props.Reload();
                console.log("Deletes card"); })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { cages, isLoggedIn, Reload } = this.props;

        return cages.map((cage) => (
            <div key={cage._id}>
                <CageSpace cage={cage} Reload={Reload}></CageSpace>
                {isLoggedIn && <button variant="danger" onClick={() => this.handleDelete(cage._id)}>Delete</button>}
              
            </div>
        ));
    }
}