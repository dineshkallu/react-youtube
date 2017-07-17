import React from 'react'
import styled from 'styled-components'
//import {ThemeProvider} from 'styled-components'
import './App.css'
import SearchBar from './SearchBar'
import VideoComponent from './VideoComponent'

const RootDiv = styled.div`
display: flex;
flex-direction: column;
background:red;
`

const App = () => (
    <RootDiv>
    {/*<ThemeProvider theme={theme}>*/}
      <SearchBar></SearchBar>
      <VideoComponent></VideoComponent>
    {/*</ThemeProvider>*/}
    </RootDiv>)

export default App

/*
Seacrh Bar <- (user input)

Youtube API <- (user input)

PlayList <- (Youtube API Response)


Response:
var= user input

sending the var to API : api({key, term})


*/