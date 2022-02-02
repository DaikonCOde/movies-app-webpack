import styled from "styled-components";
import { Title } from "../../Styles/Globals/Title.js";
import { Card } from "../../Styles/Globals/Card.js";
import { ButtonPlayGlobal } from "../../Styles/Globals/ButtonPlayGlobal.js";

export const ContentComingSoon = styled.div`
  margin: 20px 0;
  padding: 0 15px;
  width: 100%;
  .mySwiper {
    .swiper-pagination-bullet {
      background: ${ props => props.theme.colors.gray[70] };
      opacity: 0.6;
    }
    .swiper-pagination-bullet-active {
      background: ${ props => props.theme.colors.secondary[1] };
      opacity: 1;
    }
  }
`
export const ContentMovies = styled(Card)`
  height: 200px;
  max-width: 350px;
  min-width: 300px
`
export const TitleMovie = styled(Title)`
  font-size: 16px;
  margin: 0;
`

export const ButtonPlay = styled(ButtonPlayGlobal)`
  height: 40px;
  left: calc(50% - 20px);
  position: absolute;
  top: calc(50% - 20px);
  width: 40px;
`