build-lists: true

## ISFiT 2017

####Iver Skjervum-Karlsen

---

#Blank

![inline fit](./blank_diamant_outline_red.png)

---

![](./sommer.jpg)

#Blank

- Sommerstipend 2017

- http://blankos.lol/sommer

---
# React/Redux

- Intro til React
- Mat?
- Intro til Redux

---

## ES2015

```javascript
class Person {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }

    // this bundet til klassen
    getName2 = () => this.name
}

```

---

## React

---

#Rendre til DOM

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
```
---

# React

```javascript
class HelloWorld extends React.Component {
  render() {
    return(
      <div>Hello World</div>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

```

---
#State
```javascript
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

```
---
## Oppgave 1

- ```git clone https://github.com/iverds/isfit-react-redux.git```
- ```git checkout part1```
- ```npm run watch```
- ```http://localhost:3000```
- Lag en komponent med en knapp som øker en teller med 1 hver gang den trykkes på
- Hint: Begynn i main.jsx

---

# Props
```javascript
class List extends React.Component {
    render() {
        const elements = ["One", "Two", "Three"];
        return(
            <ul>
                { elements.map(e => <Item key = { e } element = { e } />) }
            </ul>
        );
    }
}

class Item extends React.Component {
    static propTypes = {
        element: React.PropTypes.string.isRequired,
    }
    render() {
        return(<li>{ this.props.element }</li>);
    }
}
```

---

# Stateless Functions
```javascript

function Item(props) {
  return(
    <li>{props.element}</li>
  );
}

const Item = ({element}) => <li>{element}</li>

Item.propTypes = {
    element: React.PropTypes.string.isRequired,
}

```

---

# Oppgave 2

- For hver gang dere trykker på knappen i oppgave 1 skal det nå opprettes et nytt element i en liste
- Hint 1: Du må ha en array i state
- Hint 2: Det kan være lurt å lage flere komponenter

---

# Forms

```javascript
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
        this.setState({ text: "" });
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={ this.onChange } value={ this.state.text } />
                <input type="submit" />
            </form>
        );
    }
}
```
---

#Struktur på kode

- Eksport (components/item.jsx):

```javascript
class Item extends React.Component {
    static propTypes = {
        element: React.PropTypes.string.isRequired,
    }
    render() {
        return(<li>{ this.props.element }</li>);
    }
}

export default Item;
```

- Import (main.jsx):

```javascript
import Item from "components/item"
```

---

#Oppgave 3

- Istedenfor at man oppretter nye elementer ved å trykke på en knapp,
skal du nå opprette nye elementer i listen ved å skrive inn navnet på elementet
- Strukturer komponentene dine på en fornuftig måte
- Hint 1: En funksjon kan også sendes som prop til en komponent
- Hint 2: Lag en Form-komponent som tar inn en funksjon

---

#Pause
- For "fasit" del 1: ```git checkout part2```

---

# React + State
- Kan være utfordrende med mye state
- Trenger en måte å strukturere state på

---

## Facebook Flux

![inline fit](./flux.png)

---


##Redux

![inline fit](./redux.png)

---
# Reducer


```javascript
function myButtonReducer(isOpen = false, action) {
    switch (action.type) {
        case "SWITCH_BUTTON":
            return action.isOpen;
        default:
            return isOpen;
    }
}

var store = createStore(combineReducers({myButtonReducer});

store.dispatch({
    type: 'SWITCH_BUTTON',
    isOpen: true
});

```
---

# Knytte store til reducers


```javascript
class Open extends React.Component {   
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

export default connect(mapStateToProps)(OpenContainer);

```
---

```javascript

import Open from 'components/open';

ReactDOM.render(
    <Provider store={ store }>
        <Open />
    </Provider>,
    document.getElementById("app")
);
```

---

#Oppgave 4

- Skriv om applikasjonen vi har skrevet til å bruke Redux
- Hint 1: Opprett en reducer for listen av tekster
- Hint 2: Bruk this.props.dispatch for å kalle actions

---

# AJAX

- En action kan returnere en ny funksjon som tar inn dispatch som argument (redux-thunk)
- Hendig når vi skal gjøre asynkrone kall

---

```javascript

import * as Api from "api";

export function getAll() {
    return dispatch => {
        Api.get().then(result => {
            dispatch({
                type: ""
            })
        })
    };
}

```

---

## Oppgave 5

- Istedenfor å bruke en liste som ligger inne i appen, så bruker vi server for å hente data
- Du kan også bruke serveren til å lagre nye meldinger
- Hint: Apiet finnes i api/index

---
