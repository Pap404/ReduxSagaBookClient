import React from 'react';
import { connect } from 'react-redux';
import Book from "./Book";
import UpdateBook from "./UpdateBook";

class BookList1 extends React.Component {
    componentDidMount() {
        this.props.AddBook();
    }

    render() {
        const x = this.props.books;
        console.log(x);
        return(
            <div>
                <div>
                    {x.map(book=>(book.edited ? <UpdateBook book={book} key={book.id} />
                    : <Book key={book.id} book={{...book, edited:false}} delete={this.props.DeleteBook} edit={this.props.EditBook} />))}
                </div>

            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        books: state.book
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
    AddBook: () => {
        dispatch({ type: "FETCHED_BOOK" })
    },
    DeleteBook: (id) => {
        dispatch({ type: "REMOVE_BOOK", id })
    },
        EditBook: (id) => {
        dispatch({ type: "EDIT_BOOK", id })
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList1);

// export default connect(
//     state => ({
//         books: state.book
//     }),
//     dispatch => ({
//         AddBook: () => {
//             dispatch(getAllBooks());
//         },
//         onDeleteBook:(id=>{
//            dispatch(deleteBook(id))
//         }),
//         onEditBook:(id=>{
//             dispatch(editBook(id));
//         })
//     })
// )(BookList1);