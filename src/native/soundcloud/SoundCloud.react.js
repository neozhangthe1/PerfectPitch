/**
 * Created by yutao on 16/3/4.
 */

import Component from 'react-pure-render/component';
import React, {
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native"


var mockedData = [{
  "genre": "Deep House",
  title: "Coffee (Manhattoes Remix)",
  user: {
    username: "manhattoes"
  },
  artwork_url: "https://i1.sndcdn.com/artworks-000107004661-v4xg0d-large.jpg",
  stream_url: "https://api.soundcloud.com/tracks/191554493/stream"
}, {
  genre: "Bass",
  title: "Threadsafe",
  user: {
    username: "manhattoes"
  },
  artwork_url: "https://i1.sndcdn.com/artworks-000104588970-5kyi09-large.jpg",
  stream_url: "https://api.soundcloud.com/tracks/187885871/stream"
}];

class BrowseTracksView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }).cloneWithRows(mockedData)
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // Return mocked data for now
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockedData)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        style={styles.listView}/>
    );
  }

  renderTrack(track) {
    return (
      <TrackCell track={track}/>
    );
  }
}

class TrackCell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <View style={styles.trackCell}>
      <Image
        source={{uri: this.props.track.artwork_url}}
        style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.trackTitle}>{this.props.track.title}</Text>
        <Text style={styles.trackArtist}>{this.props.track.user.username}</Text>
      </View>
    </View>
  }
}

class SoundCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: null
    }
  }

  render() {
    return <View style={styles.appContainer}>
      <BrowseTracksView />
      <NowPlayingFooterView nowPlaying={this.state.nowPlaying}/>
    </View>
  }
}

class NowPlayingFooterView extends Component {
  render() {
    if (!this.props.nowPlaying) {
      return (
        <View style={styles.nowPlayingFooter}>
          <Text style={styles.trackTitle}>Welcome!</Text>
          <Text style={styles.trackArtist}>No Track Right Now</Text>
        </View>
      );
    }
    return (
      <View style={styles.nowPlayingFooter}>
        <Text style={styles.trackTitle}>{this.props.nowPlaying.title}</Text>
        <Text style={styles.trackArtist}>{this.props.nowPlaying.user.username}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  navContainer: {
    flex: 1
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  nowPlayingFooter: {
    flex: 0,
    borderTopWidth: 1
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  trackCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  },
  trackTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  trackArtist: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center'
  },
  rightContainer: {
    flex: 1
  }
});


export default SoundCloud;
