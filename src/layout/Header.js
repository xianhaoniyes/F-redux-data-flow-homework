import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPermissions, setProfile, setStatus } from '../actions';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      permissions: null,
      signIn: false
    };
    this.props.transferStatus(false);
  }

  signIn = async () => {
    const response = await axios.get('https://my-json-server.typicode.com/kevindongzg/demo/login');
    const { name, id, avatar, permissions } = response.data;
    this.setState({
      profile: { name, id, avatar },
      permissions,
      signIn: true
    });
    this.props.transferProfile(this.state.profile);
    this.props.transferPermissions(this.state.permissions);
    this.props.transferStatus(true);
  };

  signOut = () => {
    this.setState({
      profile: null,
      permissions: null,
      signIn: false
    });
    this.props.transferProfile({}); // this is very important !!! in a single function, your operation can not rely on the result of
    // setState, because setState is async in a function!!
    this.props.transferStatus(false);
  };

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <img src={this.state.signIn && this.state.profile.avatar} alt="" />
          <span className="username">{this.state.signIn && this.state.profile.name}</span>
          <a className="sign" onClick={this.state.signIn ? this.signOut : this.signIn}>
            {this.state.signIn ? 'Sign Out' : 'Sign In'}
          </a>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  transferProfile(profile) {
    dispatch(setProfile(profile));
  },

  transferPermissions(permissions) {
    dispatch(setPermissions(permissions));
  },

  transferStatus(status) {
    dispatch(setStatus(status));
  }
});

export default connect(null, mapDispatchToProps)(Header);
