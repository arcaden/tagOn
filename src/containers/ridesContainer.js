import { connect } from 'react-redux'
import { addRider } from '../actions'
import { RideList } from '../components/Rides/RideList'

const mapStateToProps = state => {
    return {
        rides: state.rides
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRideClick: ride => {
            dispatch()
        }
    }
}
