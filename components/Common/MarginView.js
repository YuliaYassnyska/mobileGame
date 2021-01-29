import React, { Component } from 'react';
import { View } from "react-native";
import PropTypes from 'prop-types';

class MarginView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ marginBottom: this.props.margin }}></View>
    )
  }
}

MarginView.propTypes = {
  margin: PropTypes.number
};

export default MarginView;