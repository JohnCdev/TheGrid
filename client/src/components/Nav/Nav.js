import React from 'react';
import "./Nav.css";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";

export default class Nav extends React.Component {
    state = {
        authenticated: false,
        count: 0
    }


    handleClick = () => {
        let nextCount = this.state.count + 1;
        this.setState({count: nextCount})
        
    }



    render() {




        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">
                        React Reading List
                    </a>
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{this.state.count}</a>
                        </li>
                    </ul>
                    <LogInOutBtn handleClick={this.handleClick} authenticated={this.state.authenticated}/>
                </nav>
            </div>
        )
    }
}
