import {
    CREATE_USER,
    CREATE_RIDE,
    ADD_RIDER,
} from './actions'

import { combineReducers } from 'redux'
import { actionTypes } from 'redux-firestore'

const initial_state = {
    rides: [],
    users: []
}

function rides(state = [], action) {
    switch (action.type) {
        case CREATE_RIDE:
            return [
                ...state,
                {
                    ride_id: action.id,
                    ride_title: action.ride_title,
                    ride_description: action.ride_description,
                    departure: action.departure,
                    departure_time: action.departure_time,
                    destination: action.destination,
                    driver: action.driver,
                    riders: action.riders,
                    stops: actionTypes.stops
                }
            ]
        case ADD_RIDER:
            return state.map((ride) => {
                if (action.ride_id === ride.id) {
                    return Object.assign({}, ride, {
                        riders: ride.riders.push(action.action.user_id)
                    })
                }
            })
        default:
            return state
    }
}

function users(state = [], action) {
    switch (action.type) {
        case CREATE_USER:
            return [
                ...state,
                {
                    id: action.user_id,
                    first_name: action.first_name,
                    last_name: action.last_name
                }
            ]
        default:
            return state
    }

    const tagOn = combineReducers({
        users,
        rides
    })

    export default tagOn
}

