import React, { useRef } from 'react';
import * as userActions from './login.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: user => dispatch(userActions.setUser(user))
    };
};

const Login = props => {
    const userName = useRef(null);
    const password = useRef(null);
    const login = () => {
        if (userName.current.value === 'react' && password.current.value === 'fictizia') {
            const user = {
                userName: userName.current.value,
                password: password.current.value
            }

            props.setUser(user);
            props.history.push('/posts');
        }
        console.log('No tienes acceso al portal');
    }

    return <div>
        <h1>Login</h1>
        <div>
            <input type='text' ref={userName}/>
        </div>
        <div>
            <input type='password' ref={password}/>
        </div>
        <div>
            <button onClick={login}>Access</button>
        </div>
    </div>
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
