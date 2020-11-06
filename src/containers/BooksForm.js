import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

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
    const { title } = this.state;
    e.preventDefault();
    if (title.length) {
      createBook(this.state);
      this.setState({ title: '', category: 'Action' });
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" value={title} onChange={this.handleChange} />
        </label>
        <label htmlFor="title">
          Categories
          <select value={category} onChange={this.handleChange}>
            {categories.map(
              category => <option key={category} value={category}>{category}</option>,
            )}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook(book) {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
