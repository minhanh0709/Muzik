import {
    combineReducers
} from 'redux';
import HomeReducer from './home_reducer'
import TrackReducer from './track_reducer'
import ChartReducer from './chart_reducer'
import QueueReducer from './queue_reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    homeState: HomeReducer,
    trackState: TrackReducer,
    chartState: ChartReducer,
    loadingBar: loadingBarReducer,
    queueState: QueueReducer
})
