import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        {/* Redirect the root route to the login page */}
                        <Route path="/" exact>
                            <Redirect to="/login" />
                        </Route>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/employees" component={ListEmployeeComponent} />
                        <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent} />
                        {/* Uncomment and update the path for the UpdateEmployeeComponent as needed */}
                        {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent} /> */}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
