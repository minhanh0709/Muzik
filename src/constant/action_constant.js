// actions for player
export const UPDATE_LYRIC = 'UPDATE_LYRIC';
export const UPDATE_LYRIC_PERCENT = 'UPDATE_LYRIC_PERCENT';
export const UPDATE_PLAYED_PERCENT = 'UPDATE_PLAYED_PERCENT';

// actions for song
export const START_FETCHING_SONG = 'START_FETCHING_SONG';
export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
export const FETCH_SONG_FAILURE = 'FETCH_SONG_FAILURE';
export const FETCH_SUGGESTED_SONG_SUCCESS = 'FETCH_SUGGESTED_SONG_SUCCESS';
export const FETCH_SUGGESTED_SONG_FAILURE = 'FETCH_SUGGESTED_SONG_FAILURE';
export const START_GET_SONGS = 'START_GET_SONGS'
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS'
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE'
export const FINISH_GET_SONGS = 'FINISH_GET_SONGS'
// actions for albums
export const GET_DEFAULT_ALBUMS = 'GET_DEFAULT_ALBUMS';
export const START_GET_ALBUMS = 'START_GET_ALBUMS';
export const GET_ALBUMS = 'GET_ALBUMS';
export const CLEAR_ALBUMS = 'CLEAR_ALBUMS';
export const SET_NUMBER_OF_PAGES = ' SET_NUMBER_OF_PAGES';
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_PAGE_CHUNK_INDEX = 'CHANGE_PAGE_CHUNK_INDEX';
export const FETCH_ALBUM_PLAYLIST = 'FETCH_ALBUM_PLAYLIST';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE'
export const FINISH_GET_ALBUMS = 'FINISH_GET_ALBUMS'
export const ADD_ALBUM = 'ADD_ALBUM'
// actions for artists
export const FETCH_SINGLE_ARTIST_SONGS = 'FETCH_SINGLE_ARTIST_SONGS';
export const FETCH_SINGLE_ARTIST_ALBUMS = 'FETCH_SINGLE_ARTIST_ALBUMS';
export const FETCH_SINGLE_ARTIST_BIOGRAPHY = 'FETCH_SINGLE_ARTIST_BIOGRAPHY';
export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_DEFAULT_ARTISTS = 'FETCH_DEFAULT_ARTISTS';
export const CLEAR_ARTIST = 'CLEAR_ARTIST';
export const CLEAR_ARTISTS = 'CLEAR_ARTISTS';

// actions for homepage
export const START_FETCHING_TRACKS = 'START_FETCHING_TRACKS';
export const FETCH_TRACK_SUCCESS = 'FETCH_TRACK_SUCCESS';
export const FETCH_TRACK_FAILURE = 'FETCH_TRACK_FAILURE';
export const START_SEARCHING = 'START_SEARCHING';
export const FINISH_SEARCHING = 'FINISH_SEARCHING';
export const SEARCH_NOT_FOUND = 'SEARCH_NOT_FOUND';
// acitons for UI
export const SHOW_ANALYZER = 'SHOW_ANALYZER';
export const HIDE_ANALYZER = 'HIDE_ANALYZER';
export const TOGGLE_TRACK_DROPDOWN = 'TOGGLE_TRACK_DROPDOWN';
export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE';
export const TOGGLE_QUEUE = 'TOGGLE_QUEUE';
export const REPLACE_QUEUE = 'REPLACE_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const REMOVE_SONG_FROM_QUEUE = 'REMOVE_SONG_FROM_QUEUE';
export const SLIDE_IN_RIGHT = 'SLIDE_IN_RIGHT';
export const RESET_SLIDE_IN_RIGHT = 'RESET_SLIDE_IN_RIGHT';
export const START_DOWNLOADING = 'START_DOWNLOADING';
export const FINISH_DOWNLOADING = 'FINISH_DOWNLOADING';
export const UPDATE_DOWNLOAD_PROGRESS = 'UPDATE_DOWNLOAD_PROGRESS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';
export const START_FADING = 'START_FADING';
export const STOP_FADING = 'STOP_FADING';

// actions for handling route transition
export const TOGGLE_PUSH_ROUTE = 'TOGGLE_PUSH_ROUTE';


// action for chart
export const FETCH_VPOP_CHART = 'FETCH_VPOP_CHART';
export const FETCH_JPOP_CHART = 'FETCH_JPOP_CHART';
export const FETCH_CPOP_CHART = 'FETCH_CPOP_CHART';
export const CHANGE_ACTIVE_CHART = 'CHANGE_ACTIVE_CHART';

// action for authentication
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const START_PROCESSING = 'START_PROCESSING';
export const FINISH_PROCESSING = 'FINISH_PROCESSING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// action for user playlist
export const GET_PLAYLIST_COLLECTION = 'GET_PLAYLIST_COLLECTION';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const REMOVE_SONG_FROM_PLAYLIST = 'REMOVE_SONG_FROM_PLAYLIST';
export const ADD_SONG_TO_STORE_TEMPORARILY = 'ADD_SONG_TO_STORE_TEMPORARILY';
export const DELETE_SONG_FROM_PLAYLIST = 'DELETE_SONG_FROM_PLAYLIST';
export const PLAY_USER_PLAYLIST = 'PLAY_USER_PLAYLIST';
export const CLEAR_USER_PLAYLIST = 'CLEAR_USER_PLAYLIST';

// action for user 
export const START_GET_USERS = 'START_GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'
export const FINISH_GET_USERS = 'FINISH_GET_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SHOW_USER = 'SHOW_USER'