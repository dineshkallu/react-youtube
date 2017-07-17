import React from 'react'
import styled from 'styled-components'


const StyledDiv=styled.div`
display:flex;
flex:1;
`

const StyleTextDiv = styled.div`
color: white;
`

const PlayListItem = (props) => {
    return (<StyledDiv onClick={ () => props.selectionCallback(props.videoId) }>
    <img src={props.iconURL} alt={props.title}/>
    <StyleTextDiv>{props.title} </StyleTextDiv>
    </StyledDiv>)
}
 

export default PlayListItem