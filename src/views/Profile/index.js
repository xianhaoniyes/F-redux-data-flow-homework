import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{this.props.profile && this.props.profile.name}</li>
          <li>用户id：{this.props.profile && this.props.profile.id}</li>
          <li>用户头像：</li>
          <img src={this.props.profile && this.props.profile.avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps)(Profile);
