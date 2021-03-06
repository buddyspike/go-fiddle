import './Header.css';
import React, { Component } from 'react';
import config from '../config';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCertificatesPanel: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(message) {
    if (this.props.onSelect) {
      this.props.onSelect(message);
    }
  }

  render() {
    return (
      <div className="Header">
        <div className="brand">GoFiddle</div>
        <div className="tools">
          <a href={`${config.restApi}certificate`}>Download certificate</a>
        </div>
      </div>
    );
  }
}

export default Header;
