import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchShowDetailsAsync, getAllSelected, removeSelectedShow } from '../../redux/movies/movieSlice';
import { DetailsShow } from '../../components/DetailsShow/DetailsShow';
import { Spinner } from '../../components/Spinner/Spinner';

export const Detail = () => {
  const dispatch = useDispatch();
  const {imdbid} = useParams();

  const data = useSelector(getAllSelected);

  useEffect(() => {
    dispatch(fetchShowDetailsAsync(imdbid));
    return () => {
      dispatch(removeSelectedShow())
    }
  }, [imdbid]);

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
