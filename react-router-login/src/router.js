import React from "react";
import  {HashRouter as Router,Route,Switch,Redirect}  from  'react-router-dom';
import { PrivateRoute } from "./router/private.js";
import Index from "./pages/Index";
import Login from "./login";
export default class publicIndex extends React.Component{
	render(){
		return(
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} ></Route>
                    <PrivateRoute exact path="/" component={Index} ></PrivateRoute>
                </Switch>
            </Router>
			)
	}
}