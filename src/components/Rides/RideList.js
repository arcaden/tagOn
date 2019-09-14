import React from 'react'
import Ride from './Ride'

const RideList = ({ rides, joinRide }) => (
    <ul>
        {rides.map(ride => (
            <Ride key={ride.id} {...ride} onClick={() => joinRide(ride.id)} />
        ))}
    </ul>
)

export default RideList   