import React, { Component } from 'react'

export class PlayerCard extends Component {
    render() {
        return (
            <div className='playerList-card'>
                <h1 data-testid="player-name">{this.props.name}</h1>
                <h1>{this.props.country}</h1>
                <h1>{this.props.searches}</h1>
            </div>
        )
    }
}

export default PlayerCard
