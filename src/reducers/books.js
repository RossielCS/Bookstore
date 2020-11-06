const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state];
    case 'REMOVE_BOOK':
      return state.filter(book => book !== action.book);
    default:
      return state;
  }
};

export default booksReducer;
