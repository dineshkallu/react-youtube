import React from 'react'
import styled from 'styled-components'

const VideoPlayerDiv=styled.div`
display:flex;
flex: 5;
`

const VideoDiv=styled.iframe`
display:flex;
flex: 1;
`

const VideoPlayer = ({videoId, autoplay, controls}) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&controls=${controls}`
    return (
        <VideoDiv src={videoSrc} frameBorder='0'></VideoDiv>
    )
}
const VideoPlayerComponent = ({videoId}) => (
    <VideoPlayerDiv >
        <VideoPlayer videoId={videoId} autoplay='1' controls='1'/>
    </VideoPlayerDiv>
)

export default VideoPlayerComponent
