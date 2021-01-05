import React, {Component, } from "react";
import PropTypes from 'prop-types';

class CartListItem extends Component {
    static propTypes = {
        details: PropTypes.object.isRequired,
        onDelete: PropTypes.any.isRequired,
        style: PropTypes.any
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                {this.props.details.title} <button onClick={()=> this.props.onDelete(this.props.details.id)}>X</button> 
            </li>
        )
    }
}

export default CartListItem;