import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button className="ui button" onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui button" onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            );
        }
    }
    
    renderHeader() {
        return (
            <div className="ui secondary menu">
                <Link className="item" to="/">Comment List</Link>
                <Link className="item" to="/post">Comment Box</Link>
                {this.renderButton()}
            </div>
        )
    }
    
    render() {
        return (
            <div className="ui container">
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);