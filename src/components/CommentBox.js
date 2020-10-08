import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comment: '' });
        
        this.props.saveComment(this.state.comment);
    };

    render() {
        return (
            <div className="ui sizer vertical segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <h1 className="ui large header">Add a Comment</h1>
                    <textarea
                        className="field"
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                    <div>
                        <button className="ui primary button">Submit Comment</button>
                    </div>
                </form>
                {/* <button
                    className="fetch-comments ui secondary button"
                    style={{marginTop: "5px"}}
                    onClick={this.props.fetchComments}>
                        Fetch Comments
                </button> */}
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);