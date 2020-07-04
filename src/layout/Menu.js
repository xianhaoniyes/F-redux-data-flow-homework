import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { modules } from '../utils';
import './Menu.scss';
import { connect } from 'react-redux';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {this.props.status &&
            modules
              .filter(({ permissionCode }) => this.props.permissions.includes(permissionCode))
              .map(({ name, path }) => (
                <li className="nav-item" key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ status, permissions }) => ({
  status,
  permissions
});

export default connect(mapStateToProps)(Menu);
