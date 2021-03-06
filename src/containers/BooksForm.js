import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import idGenerator from '../auxiliaries';

const categories = [
  'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'title') {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(e) {
    const { title, category } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title.length) {
      createBook({ id: idGenerator(), title, category });
      this.setState({ title: '', category: 'Action' });
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="Books-form">
        <div>
          <h2>ADD NEW BOOK</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" id="title" value={title} placeholder="Book Title" onChange={this.handleChange} />
            <select value={category} onChange={this.handleChange}>
              {categories.map(
                category => <option key={category} value={category}>{category}</option>,
              )}
            </select>
            <input type="submit" value="ADD BOOK" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
