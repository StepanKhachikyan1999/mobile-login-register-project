import React, { Component } from 'react'
import loginImg from "../images/Rectangle 1.png";
import './style.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                    <img src={loginImg} />
                    </div>
                    <div className="form">

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <button className="btn" type="submit">Login</button>
                </div>
            </div>
        )
    }
}
