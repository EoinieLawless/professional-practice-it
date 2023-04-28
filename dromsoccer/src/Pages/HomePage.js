import React from "react";
import axios from "axios";
import { Cages } from "./cages";


export class HomePage extends React.Component {
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
        const sortedCages = this.state.cages.sort((a, b) => new Date(a.time) - new Date(b.time));
        return (
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>

                    <div style={{
                        padding: '20px',
                        float: "center",
                        margin: '0 auto'
                    }}>
                        <h2 style={{ marginBottom: '40px' }}>Drom Soccer Park - Galway</h2>

                        <p>
                            Salthill Devon Football Club is an Irish football club based in Salthill, a suburb of Galway City in the west of Ireland. The club was founded in 1977 and has grown to become one of the most successful and widely supported football clubs in the west of Ireland.
                        </p>

                        <p>
                            Salthill Devon has a proud history of developing young footballers, with many of its players going on to play at a professional level both in Ireland and abroad. The club has also been successful at the senior level, winning numerous league and cup titles over the years.
                        </p>

                        <p>Salthill Devon's home ground is Drom Soccer Park, which is located on the outskirts of Galway City. The ground has undergone significant upgrades in recent years, including the installation of floodlights, improved pitch drainage, and the addition of new changing rooms and other facilities.</p>

                        <p>
                            Overall, Salthill Devon Football Club is a vital part of the Galway sporting community, and its ongoing success is a testament to the dedication and hard work of everyone involved with the club.
                        </p> <br /> <br />
                        <div style={{
                            padding: '20px',
                            float: "center",
                            margin: 'auto'
                        }}>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.xpB85ckeWiPy6zLelVghkgHaE8&pid=Api&P=0" border='5px solid black' padding='40px' className="Logo" alt="Logo" />
                        </div>

                        <h3>Renting</h3>
                        <p>Drom Soccer Park also offers cage rental for those who want to play in a more controlled environment. For 70 euro per hour, players can rent a cage equipped with showers, balls, and bibs included.</p>
                        <p>These cages are suitable for 5v5 games, and rental times are typically from 5 to 10 pm on weekdays.</p>
                        <p> However, the cages are not available on weekends. Whether you're looking to hone your skills or have a friendly match with friends,
                            Drom's cages are a great option for soccer enthusiasts.</p>

                            <br /><br />

                        <h2>Cages Info of the day below</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', borderTop: '1px solid black', paddingTop: '20px', marginTop: '60px' }}>
                                {sortedCages.map((cage, index) => (
                                    <div key={index} style={{ flex: '1 0 25%', margin: '10px' }}>
                                        <Cages cages={[cage]} Reload={this.componentDidMount}></Cages>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        );
    }
}