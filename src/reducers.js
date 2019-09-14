import {
    ADD_USER,
    CREATE_RIDE,
    ADD_RIDER,
} from './actions'

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
                    departure: action.departure,
                    departure_time: action.departure_time,
                    destination: action.destination,
                    driver: action.driver,
                    riders: action.riders
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


    function tagOn(state = initial_state, action) {
        switch (action.type) {
            case CREATE_USER:
                return Object.assign({}, state, {
                    users: users(state.users, action)
                })
            case CREATE_RIDE:
                return Object.assign({}, rides(state.rides, action))
            case ADD_RIDER:
                return Object.assign({}, rides(state.rides, action))
        }
        return state
    }

}

