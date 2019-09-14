export const ADD_USER = 'ADD_USER'
export const CREATE_RIDE = 'CREATE_RIDE'
export const ADD_RIDER = 'ADD_RIDER'

export function addUser(user) {
    return { type: ADD_TODO, user }
}

export function createRide(ride) {
    return { type: CREATE_RIDE, ride }
}

export function addRider(user, ride) {
    return { type: ADD_RIDER, ride }
}



