import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './PlayerCard'


export class PlayerList extends Component {
        state = {
            players: []
        }
    componentDidMount() {
        axios.get('http://localhost:5000/api/players').then(res => {
          this.setState({players: res.data})
        })
        .catch(err => {
          console.log(err)
        })
    };


    render() {
        return (
            <div className='playerList-container'>
                {this.state.players.map(player => 
                    <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches}/>
                )}
            </div>
        );
    };
}

export default PlayerList;