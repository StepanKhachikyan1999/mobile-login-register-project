import React, { Component } from 'react'
import loginImg from "../images/Rectangle 1.png";
import Page from './Page';

export default class Register extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username : '',
            email : '',
            phone : '',
        }
    }

    // Form events

    onChangeName(e) {
        this.setState( {username:e.target.value} )
    }

    onChangeEmail(e) {
        this.setState( {email:e.target.value} )
    }

    onChangePassword(e) {
        this.setState( {password:e.target.value} )
    }

    onSubmit(e) {
        e.preventDefault()
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('username'));

        if(localStorage.getItem('username')) {
            this.setState({
                username:this.userData.name,
                email:this.userData.email,
                password:this.userData.password
            })
        } else {
            this.setState({
                username: '',
                email: '',
                password: '',
            })
        }
    }

    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('username',JSON.stringify(nextState));
    }

    
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                    <img src={loginImg} />
                    </div>
                    <div onSubmit={this.onSubmit} className="form">

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword}/>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <button  className="btn" type="submit">Register</button>
                </div>
            </div>
        )
    }
}
