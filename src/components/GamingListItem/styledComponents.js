
import styled from 'styled-components'

import {EmptyHeading} from '../Home/styledComponents'

// {GamingListCard, GamingImg, GamingHeading}

export const GamingListCard = styled.li`
  width: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
  margin-bottom: 40px;
`
export const GamingImg = styled.img`
  width: 100%;
`
export const GamingHeading = styled(EmptyHeading)`
  font-size: ${props => props.para && '15px'};
  text-align: start;
`
