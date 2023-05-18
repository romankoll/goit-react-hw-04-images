import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.hendleSearch(this.state.value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className={css.searchbar} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  hendleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
