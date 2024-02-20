import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Import withRouter

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this); // Bind the handleLogout method
    }

    handleLogout() {
        localStorage.removeItem('USER_KEY'); // Adjust this key if needed
        this.props.history.push('/login'); // Redirect to login page
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a href="https://javaguides.net" className="navbar-brand">Employee Management App</a>
                        <div className="ml-auto"> {/* Use ml-auto to push the button to the right */}
                            <button onClick={this.handleLogout} className="btn btn-info">Logout</button>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(HeaderComponent); // Wrap HeaderComponent with withRouter
