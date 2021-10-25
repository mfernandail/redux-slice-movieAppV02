import React from 'react';
import { ListIcons } from './ListIcons';
import { DataShow } from './DataShow';
import star from '../../images/icons/star.svg';
import like from '../../images/icons/thumbs-up.svg';
import calendar from '../../images/icons/calendar.svg';
import clock from '../../images/icons/clock.svg';
import './DetailsShow.css';

export const DetailsShow = ({data}) => {
  const icons = [
    { desc: 'IMDB Rating', icons: star, info: data.imdbRating },
    { desc: 'IMDB Votes', icons: like, info: data.imdbVotes },
    { desc: 'Runtime', icons: clock, info: data.Runtime },
    { desc: 'Year', icons: calendar, info: data.Year },
  ]
  const dataShow = [
    { desc: 'Director', info: data.Director },
    { desc: 'Actors', info: data.Actors },
    { desc: 'Generes', info: data.Genre },
    { desc: 'Languages', info: data.Language },
    { desc: 'Awards', info: data.Awards },
  ]
  return (
    <div className="show-section">
      <h2 className="show-section__title">{data.Title}</h2>

      <div className="show-section__left">
        <div className="show-section__rating">
          {
            icons.map(icon => (
              <ListIcons
                key={icon.desc}
                icon={icon.icons}
                data={icon.info}
                description={icon.desc}
              />
            ))
          }
        </div>
        <div className="show-section__plot">{data.Plot}</div>
        <div className="show-section__info">
        {
          dataShow.map(show => (
            <DataShow
              key={show.desc}
              desc={show.desc}
              info={show.info}              
            />
          ))
        }
        </div>
      </div>

      <div className="show-section__right">
        <img src={data.Poster} alt={data.Title} />
      </div>

    </div>
  )
}
