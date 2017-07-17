import React, {Component} from 'react'
import styled from 'styled-components'
import YoutubeAPI from './../API/YouTube'
import PlayListItem from './PlayListItem'
import { CardStack, Card } from 'react-cardstack'


const PlaylistDiv= styled.div`
display: flex;
flex:2;
background: blue;
flex-direction:column;
`
/*videoObject = {
    etag:'',
    id: {
        kind: '', 
        videoId: ''
    },
    snippet: {
        description: '',
        title: '',
        thumbnails: {
            default:{
                width:0,
                height:0,
                url:''
            }
        }
    }
}*/
export default class PlayListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {videoPlayList: []}
    }

    componentDidMount() {
        YoutubeAPI.register( (data) => this.setState({videoPlayList: data}) )
    }

    render() {
        return (
            <CardStack >
                { this.state.videoPlayList.map( (videoListItem, index) => ( <Card 
                        selectionCallback={this.props.playlistSelectionCallback}
                        videoId = {videoListItem.id.videoId}
                        key={index} iconURL={videoListItem.snippet.thumbnails.default.url}
                        title={videoListItem.snippet.title}
                    />))  }
            </CardStack>
        )
    }

    componentWillUnmount() {
        console.log('unregistering')
        YoutubeAPI.register()
    }
}

