export const CREATE_USER = 'CREATE_USER'
export const CREATE_RIDE = 'CREATE_RIDE'
export const ADD_RIDER = 'ADD_RIDER'

export function createUser(user) {
    return { type: CREATE_USER, user }
}

export function createRide(ride) {
    return { type: CREATE_RIDE, ride }
}

export function addRider(user, ride) {
    return { type: ADD_RIDER, ride }
}



