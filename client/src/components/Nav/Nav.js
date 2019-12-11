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
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">
                        Base
                    </a>
                    {/* add "active" to the nav-item className for what is active */}
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Allies<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">nav item</a>
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
