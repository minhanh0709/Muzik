import axios from 'axios';
import * as types from '../constant/action_constant'
import {
    startFading,
    stopFading
} from '../actions/ui'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function fetchTracks() {
    return dispatch => {
        dispatch({
            type: types.START_FETCHING_TRACKS
        })
        dispatch(showLoading('sectionBar'))

        axios.get('http://127.0.0.1:3001/api/v1/songs' )
            .then(
                data =>
              {
                dispatch({
                    type: types.FETCH_TRACK_SUCCESS,
                    tracks: data.data
                })
                dispatch(hideLoading('sectionBar'))

            })
            .catch(() => {
                dispatch({
                    type: types.FETCH_TRACK_FAILURE
                })
                dispatch(hideLoading('sectionBar'))

            })
    }
}