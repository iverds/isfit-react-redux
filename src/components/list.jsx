import React from "react";

import Item from "components/item";

class List extends React.Component {
    render() {
        return(
            <ul>
                { this.props.elements.map(e => <Item key = { e } element = { e } />) }
            </ul>
        );
    }
}

export default List;