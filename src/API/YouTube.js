import SearchYouTubeVideos from 'youtube-api-search'
const GoogleAPIKey = 'AIzaSyBXp5tjZWaeNNl5DSkkrxANv4XsLaKpn9k'

class YoutubeAPI {

    constructor() {
        this.callback = undefined
    }

    searchVideos(userinput) {
        // Youtube API with userinput and the APIKey
        if (userinput.length > 0) {
            SearchYouTubeVideos({key: GoogleAPIKey, q: userinput}, (list) => {
                if (this.callback !== undefined) {
                    this.callback(list)
                }
            })
        }
    }

    register(callbackFn) {
        this.callback = callbackFn
    }
    
}

const YoutubeAPISingleTon = new YoutubeAPI()

export default YoutubeAPISingleTon

