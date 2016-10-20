import React from "react";

class Form extends React.Component {
    constructor(props) {
        super();
        this.state = { text: "" }
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({ text: "" });
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange} value={this.state.text} />
                <input type="submit" value="Lagre" />
            </form>
        );
    }
}

export default Form;