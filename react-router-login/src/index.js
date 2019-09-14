import React from 'react';
import ReactDOM from 'react-dom';
import Routerindex from './router.js';
import * as serviceWorker from './serviceWorker';

export default class RouterIn extends React.Component{
	render(){
		return(<Routerindex></Routerindex>)
	}
} 

ReactDOM.render(<RouterIn/>,document.getElementById('root') );

serviceWorker.unregister();
