import axios from 'axios';
import * as types from '../constant/action_constant'
import {
    startFading,
    stopFading
} from '../actions/ui'
export default function fetchTracks() {
    return dispatch => {
        dispatch({
            type: types.START_FETCHING_TRACKS
        })
        dispatch(startFading())

        axios.get('https://zingmp3.vn/album/Top-100-Pop-Au-My-Hay-Nhat-Various-Artists/ZWZB96AB.html')
            .then(({
                data
            }) => {
                console.log(data)
            })
    }
}