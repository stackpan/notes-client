import React, { Component } from 'react';
import { setBaseURL } from '../../../lib/utils/storage';

class AnnounceBar extends Component {
  componentDidMount() {
    setBaseURL();
  }

  render() {
    return <div />;
  }
}

export default AnnounceBar;
