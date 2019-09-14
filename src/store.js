import { createStore } from 'redux'
import tagOn from './reducers'

const store = createStore(tagOn, window.STATE_FROM_SERVER)

