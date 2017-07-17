import React, {Component} from 'react'
import styled from 'styled-components'
import YoutubeAPI from './../API/YouTube'

const PlaylistDiv= styled.div`
display: flex;
flex:2;
background: blue;
`

export default class PlayListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {list: {}}
    }

    componentDidMount() {
        console.log('Registering')
        YoutubeAPI.register( (data) => console.log('Notified by Youtube API with', data) )
    }

    render() {
        return (<PlaylistDiv />)
    }

    componentWillUnmount() {
        console.log('unregistering')
        YoutubeAPI.register()
    }
}

