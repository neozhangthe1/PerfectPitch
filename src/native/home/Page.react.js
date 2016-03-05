import Component from 'react-pure-render/component';
import React, { PropTypes, Text, View } from 'react-native';
import appStyles from '../app/styles';
import { connect } from 'react-redux';
import CoverFlowView from '../coverflow/Coverflow.react';
import SoundCloud from "../soundcloud/SoundCloud.react"


class Page extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <View style={[appStyles.centeredView, { paddingBottom: 0, borderColor: "green"}]}>
        <SoundCloud />
      </View>
    );
  }
}

export default connect(state => ({
  msg: state.intl.msg.home
}))(Page);
