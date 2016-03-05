/**
 * Created by yutao on 16/3/2.
 */

import Component from 'react-pure-render/component';
import React, { View } from 'react-native';
var { Image } = React;
import appStyles from '../app/styles';
import fetch from '../../common/components/fetch';
import { fetchUserTodos } from '../../common/todos/actions';
import { CoverFlow } from 'react-native-pan-controller';

class CoverFlowView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {uri: 'http://facebook.github.io/react/img/logo_og.png'},
        {uri: 'http://facebook.github.io/react/img/logo_og.png'},
        {uri: 'http://facebook.github.io/react/img/logo_og.png'},
        {uri: 'http://facebook.github.io/react/img/logo_og.png'},
        {uri: 'http://facebook.github.io/react/img/logo_og.png'}
      ]
    };
  }

  render() {
    return (
      <CoverFlow>
        {this.state.images.map((src, i) => <Image key={i} source={src} />)}
      </CoverFlow>
    );
  }

}

// Truly universal (not only isomorphic) data fetching.
// One higher order component for browser, server, and mobile.

export default CoverFlowView;
