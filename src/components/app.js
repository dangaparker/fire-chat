import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import Home from "./home"
import Nav from './nav';
import ChatRoom from "./chat_room"
import ChooseName from "./choose_name";

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path = "/" component={Home}/>
            <Route path ="/chat-room" component={ChatRoom}/>
            <Route path="/choose-name" component={ChooseName}/>
        </div>
    </div>
);

export default App;
