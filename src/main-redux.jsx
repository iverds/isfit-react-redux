import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";
import { connect } from "react-redux";
import { getAll, create } from "actions/apiActions";

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(reducers, {});

store.dispatch(getAll());
store.dispatch(create("title"));



class OpenContainer extends React.Component {   
    toggleOpen = () => {
        this.props.dispatch({
            type: 'SWITCH_BUTTON',
            isOpen: !this.props.isOpen
        });
    }

    render() {
        return(
            <div>
                <button onClick = { this.toggleOpen }>Toggle</button>
                { this.props.isOpen ? "Open" : "Lukket" }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.myButtonReducer
    }
}

const Open = connect(mapStateToProps)(OpenContainer);

ReactDOM.render(
    <Provider store={ store }>
        <Open />
    </Provider>,
    document.getElementById("app")
);