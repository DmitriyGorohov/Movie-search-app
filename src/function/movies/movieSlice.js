import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// API
import movieApi from '../../common/API/movieApi'
import { APIKey } from '../../common/API/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
	const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
	return response.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
	const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
	return response.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrShowDetail',
	async (imdbID) => {
		const response = await movieApi.get(`?apiKey=${APIKey}&i=${imdbID}&Plot=full`)
		return response.data
	},
)

const initialState = {
	movies: {},
	shows: {},
	selectMovieOrShow: {},
}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectMovieOrShow: (state) => {
			state.selectMovieOrShow = {}
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => { },
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			return {
				...state,
				movies: payload,
			}
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			return {
				...state,
				shows: payload,
			}
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			return {
				...state,
				selectMovieOrShow: payload,
			}
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Rejected')
		},
	},
})

export const { removeSelectMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer
