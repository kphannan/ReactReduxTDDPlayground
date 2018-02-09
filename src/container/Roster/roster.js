// @flow

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import Title from '../../component/Title/title';
import Icon from '../../component/Icon/icon';

import MotivePower from '../MotivePower/motivePower'
import { motivePowerActions } from '../../reducer/motivePower'


export class Roster extends Component {

  render () {
      return (

      <div>
        <Title tag="h1">Roster Entry</Title>
          <p><Icon name="information_outlined" color="orange" styles={{ paddingRight : 10 }}/>
              Note: If your product is made of multiple microservices,
              each of them should be added as a separate application</p>
        <MotivePower motivePower={this.props.applicationForm} actions={this.props.actions}/>
      </div>
    );
  }
}

//

const mapStateToProps = (state) => ({
    motivePower: state.forms.application
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators( motivePowerActions, dispatch)
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Roster));
