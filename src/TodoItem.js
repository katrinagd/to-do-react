import React from 'react';
import PropTypes from 'prop-types';
export default class TodoItem extends React.Component {
    static propTypes = {
        todo: PropTypes.string
    }
    render(){
        return <li>{this.props.todo}</li>
    }
}

// TodoItem.prototypes = {
//     todo: PropTypes.string
// }