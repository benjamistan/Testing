import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // Component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Component just got new props
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
        
        render() {
            return <ChildComponent {...this.props} />; // giving the Child Component its props
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps, actions)(ComposedComponent);
};



