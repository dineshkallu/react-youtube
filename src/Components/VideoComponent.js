import React from 'react'
import styled from 'styled-components'
import VideoPlayerComponent from './VideoPlayer'
import PlayListComponent from './PlayList'

const VideoDiv=styled.div`
display:flex;
height: 500px;
background: pink;
`


export default class VideoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {videoId: ''}
    }

    playlistItemSelected(id) {
        this.setState({videoId: id})
    }

    render() {
        return (
            <VideoDiv>
                <VideoPlayerComponent videoId={this.state.videoId}/>
                <PlayListComponent playlistSelectionCallback={this.playlistItemSelected.bind(this)}/>
            </VideoDiv>
        )
    }
}
