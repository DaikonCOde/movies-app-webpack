import React from 'react';
// Hooks
import { useSearchParams } from 'react-router-dom';
import { useGetVideoMovie } from '../../Hooks/useGetVideoMovie.js';
// Components
import GoBack from '../../Components/GoBack/index.jsx';
import Loading from '../../Components/Loading/index.jsx';
// Styles
import { ContentMediaPlayer} from './MediaPlayerStyles.js';
import { TitleMovie } from '../../Styles/Globals/Title.js'

const MediaPlayer = () => {

  const [searchParams] = useSearchParams();
  const idMovie = searchParams.get('id');
  const [ video, isLoading, error] = useGetVideoMovie(idMovie);

  const heightVideo = (window.innerWidth * 315) / 560;
  
  if(isLoading) {
    return (<Loading height='100vh' margin='0'/>)
  }

  return (
    <ContentMediaPlayer>
      <iframe
        className="frameVideo"
        width="100%" 
        height={heightVideo} 
        src={`https://www.youtube-nocookie.com/embed/${video.heroTrailer.key}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
      <TitleMovie className="title">{video.heroTrailer.name}</TitleMovie>
      <GoBack />
    </ContentMediaPlayer>
  )
};

export default MediaPlayer;
