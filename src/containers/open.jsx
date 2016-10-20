import React from "react";

class Open extends React.Component {   
    constructor(props) {
        super();
        this.state = {
            isOpen: false
        }    
    }

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return(
            <div>
                <button onClick = { this.toggleOpen }>Toggle</button>
                { this.state.isOpen ? "Open" : "Lukket" }
            </div>
        );
    }
}

export default Open;