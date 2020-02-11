import React from 'react';
import { connect } from 'react-redux';
import {deleteBook, getAllBooks, editBook} from "../actions";
import Book from "./Book";
import UpdateBook from "./UpdateBook";
import {fetchBook} from "../actions/actionCreator";

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
                    {x.map(book=> <Book key={book.id} book={{...book}} />)}
                    {/*<Book key={book.id} book={{...book, edited:false}} delete={this.props.onDeleteBook} edit={this.props.onEditBook} />))}*/}
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
        dispatch({ type: "FETCHED_BOOK"})
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