import React from "react";
import {CageSpace} from './cageSpace';

export class Cages extends React.Component{
    render(){
        return this.props.cages.map(
            (cage)=>{
                return <CageSpace cage={cage} key={cage._id} Reload={this.props.Reload}></CageSpace>
            }
        );
    }
}