import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncMovieOrShowDetail, getAllSelected, removeSelectedShow } from '../../redux/movies/movieSlice';
import { DetailsShow } from '../../components/DetailsShow/DetailsShow';
import { Spinner } from '../../components/Spinner/Spinner';

export const Detail = () => {
  const {imdbid} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllSelected);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbid));
    return () => {
      dispatch(removeSelectedShow())
    }
  }, [dispatch, imdbid]);

  return (
    <>
    {
      Object.keys(data).length === 0
        ? <Spinner />
        : <DetailsShow data={data} />
    }    
    </>
  )
}
