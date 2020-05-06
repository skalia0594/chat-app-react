import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Login from "./Login";
import GroupChat from "./GroupChat";
import chat from "../lib/chat"; 

class App extends React.Component{
    constructor(){
        super();
        chat.init();
        this.state={

        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/login"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/groupchat" component={GroupChat}/>
                </Switch>
            </Router>
        )
    }
}

export default App