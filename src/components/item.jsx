import React from "react";

class Item extends React.Component {
    static propTypes = {
        element: React.PropTypes.string.isRequired,
    }
    render() {
        return(<li>{ this.props.element }</li>);
    }
}

export default Item;