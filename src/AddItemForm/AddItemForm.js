import React, {Component, } from "react";
import PropTypes from 'prop-types';

class AddItemForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.any.isRequired,
        onChange: PropTypes.any.isRequired,
        value: PropTypes.string.isRequired,
        style: PropTypes.any
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input onChange={this.props.onChange} value = {this.props.value} type="text" placeholder='Ajouter une série'/>
                <button>Ajouter</button>
            </form>
        )
    }
}

export default AddItemForm;