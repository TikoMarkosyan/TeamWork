import React from 'react';
import ReactDOM from 'react-dom';
import './all_css/index.css';
import './components/body-components/table/Table.css';
import './components/body-components/loadding/Lodding';
import './components/headercomponent/popups/Popup.css';
import './components/headercomponent/header/Header.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
<p className="mycss">Name:</p> <input type="text" defaultValue={name.first} name="first" onChange={this.somethingChanged}/>
<p className="mycss">Surname:</p> <input type="text" defaultValue={name.last} name="last"  onChange={this.somethingChanged}/>
<p className="mycss">age:</p> <input type="number" defaultValue={age} name="age" onChange={this.somethingChanged}/>
*/
