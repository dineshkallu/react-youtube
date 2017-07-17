import React from 'react'
import styled from 'styled-components'
import SearchIcon from 'react-icons/lib/fa/search';
import YoutubeAPI from './../API/YouTube'

const RootDiv = styled.div`
display: flex;
height: 60px;
justify-content: center;
align-items: center;
background: orange;
`

const SearchBarInput = styled.input`
height: 32px;
padding-left:8px;
border-radius:5px;
border:none;
color:black;
outline:none;
margin-right:7px;
`
let userinput = function() {
    let text = ''
    return ((event) => { 
        if (event === undefined) {
            let value = text
            text = ''
            return value
        }
        text = event.target.value
    })
}()

const SearchBar = () => (
    <RootDiv>
        <SearchBarInput onChange={ userinput }/>
        <SearchIcon size={28} onClick={() => YoutubeAPI.searchVideos(userinput()) }/>
    </RootDiv>)

export default SearchBar

/*
Flexbox:

#Container / Parent flex-properties
display: flex
flex-direction: row | row-reverse | column | column-reverse
flex-wrap: no-wrap | wrap
flex-flow: 

justify-content: flex-start | center | space-between | space-around | flex-end  [flex-direction]
align-items: flex-start | flex-end | center | stretch | baseline [cross-axis]
align-content: flex-start | center | space-between | stretch | space-around | flex-end [cross-axis]

#Self / Child flex-properties
order: <integer>
flex-grow: <integer>
flex-shrink: <integer>
flex-basis: <length> | max-content | min-content | fit-content | auto

flex: shorthand for above three properties [flex-grow, flex-shrink, flex-basis]
    flex: 0 1 auto

align-self: auto | flex-start | flex-end | center | baseline | stretch
          [can override align-items Parent property]
*/