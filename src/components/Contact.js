import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../context';

class Contact extends Component {

  state = {
    showContentInfo: false
  };

  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  };

  render() {

    const { id, name, email, phone } = this.props.contact;
    const { showContentInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i onClick={() => this.setState({ showContentInfo: !this.state.showContentInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer'}}></i>
                <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
              </h4>
              {showContentInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// }

export default Contact;
