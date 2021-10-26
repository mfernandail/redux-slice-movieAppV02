import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
// import { API_KEY } from '../../api/MovieApiKey';

export const fetchMoviesAsync = createAsyncThunk('movies/fetchMoviesAsync', async(show) => {
  const movieSearch = show || 'Avengers';
  const response = await movieApi.get(`?apikey=bfca5c2d&s=${movieSearch}&type=movie`);  
  return response.data;
});

export const fetchSeriesAsync = createAsyncThunk('movies/fetchSeriesAsync', async(show) => {
  const serieSearch = show || 'Friends';
  const response = await movieApi.get(`?apikey=bfca5c2d&s=${serieSearch}&type=series`);  
  return response.data;
});

// export const fetchShowDetailsAsync = createAsyncThunk('movies/fetchShowDetailsAsync', async(id) => {
//   const response = await movieApi.get(`?apikey=bfca5c2d&i=${id}&Plot=full`);  
//   return response.data;
// });

export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowDetail", async (id) => {
  const response = await movieApi.get(`?apiKey=bfca5c2d&i=${id}&Plot=full`);
  return response.data;
});

const initialState = {
  movies: {},
  series: {},
  detailShow: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedShow: (state) => {
      state.detailShow = {}
    },
    removeSelectedMovie: (state) => {
      state.movies = {}
    },
    removeSelectedSerie: (state) => {
      state.series = {}
    }
  },
  extraReducers: {
    // [fetchMoviesAsync.pending]: () => (console.log('Pending')),
    [fetchMoviesAsync.fulfilled]: (state, action) => {
      // console.log('Seccess')
      return {...state, movies: action.payload}
    },
    // [fetchMoviesAsync.rejected]: () => (console.log('Rejected!')),
    [fetchSeriesAsync.fulfilled]: (state, action) => {
      return {...state, series: action.payload}
    },
    // [fetchShowDetailsAsync.fulfilled]: (state, action) => {
    //   return {...state, detailShow: action.payload}
    // },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, detailShow: payload };
    },
  }
});

export const getAllMovies = state => state.showsReducer.movies;
export const getAllSeries = state => state.showsReducer.series;
export const getAllSelected = state => state.showsReducer.detailShow;

export const {removeSelectedShow, removeSelectedMovie, removeSelectedSerie} = movieSlice.actions;
export default movieSlice.reducer;
