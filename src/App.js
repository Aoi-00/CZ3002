import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Provider store={Store}>
        <Router>
          <div className='flyout'>
            <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
              <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
                <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
                <strong className='align-middle'>SSAD Project</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('mainNavbarCollapse')}
              />
              <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink
                      exact
                      to='/'
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/about'
                    >
                      <strong>About</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/components'
                    >
                      <strong>Components</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                      to='/advanced'
                    >
                      <strong>Advanced</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {collapseID && overlay}
            <main style={{ marginTop: '4rem' }}>
              <br />
              <Routes />
              <br/>
            </main>
            <MDBFooter color='indigo'>
              <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
              </p>
            </MDBFooter>
          </div>
        </Router>
      </Provider>


    );
  }
}

export default App;
