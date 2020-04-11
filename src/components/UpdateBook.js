import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from "../actions";

class UpdateBook extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const author = this.getAuthor.value;
        const description = this.getDescription.value;
        const published = this.getPublished.value;
        const data = {
            title,
            author,
            description,
            published
        };
        this.props.EditBook1(this.props.book.id, data);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.book.title} placeholder="Enter Book Title" /><br /><br />
                    <input required type="text" ref={(input) => this.getAuthor = input}
                              defaultValue={this.props.book.author} placeholder="Enter Author" /><br /><br />
                    <input required type="text" ref={(input) => this.getDescription = input}
                           defaultValue={this.props.book.description} placeholder="Enter Book Description" /><br /><br />
                    <input required type="text" ref={(input) => this.getPublished = input}
                           defaultValue={this.props.book.published} placeholder="Published Year" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        EditBook1: (id, payload) => {
            dispatch({type: "UPDATE_BOOK", id, payload })
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(UpdateBook);
