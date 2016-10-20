import React from "react";
import Form from "containers/form";
import List from "components/list";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { elements: [] }
    }

    onSubmit = (text) => {
        this.setState({elements: this.state.elements.concat(text)})
    }

    render() {
        return(
            <div>
                <Form onSubmit = { this.onSubmit } />
                <List elements = { this.state.elements } />
            </div>
        );
    }
}
export default Main;