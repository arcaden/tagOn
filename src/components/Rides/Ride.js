import React from 'react'

const Ride = ({ onClick, ride }) => {
    <li
        onClick={onClick}
    >
        <h3> {ride.title} </h3>
        <p> {ride.des} </p>
        <div>
            <p> The Driver is ${ride.driver} </p>
            <p> Current Riders: ${ride.riders[0]} </p>
        </div>
    </li>
}

export default Ride