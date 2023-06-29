import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  setFilterValue = e => {
    let value = e.currentTarget.value.toLowerCase();
    this.props.setFilter(value);
  };

  render() {
    return (
      <>
        <label htmlFor="filter">Find contact by name</label>
        <input type="text" name="filter" onChange={this.setFilterValue}></input>
      </>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
