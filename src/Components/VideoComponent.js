import React from 'react'
import styled from 'styled-components'
import VideoPlayerComponent from './VideoPlayer'
import PlayListComponent from './PlayList'

const VideoDiv=styled.div`
display:flex;
height: 500px;
background: pink;
`
const VideoComponent = () => (
    <VideoDiv>
        <VideoPlayerComponent />
        <PlayListComponent />
    </VideoDiv>
)

export default VideoComponent
