import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { connect } from "react-redux";
import { changeLANG } from "../state/store";

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    console.log("this.props.lang", this.props.lang)
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              my_new_app
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <ButtonGroup>
                    <Button
                      style={{ backgroundColor: "#000080" }}
                      onClick={() => this.props.dispatch(changeLANG("english"))}
                      active={this.props.lang === "english"}
                    >
                      English
                    </Button>
                    <Button
                      style={{ backgroundColor: "#000080" }}
                      onClick={() => this.props.dispatch(changeLANG("spanish"))}
                      active={this.props.lang === "spanish"}
                    >
                      Español
                    </Button>
                  </ButtonGroup>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                  {this.props.lang !== 'spanish' ? "Home" : "Centro"}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">
                    {this.props.lang !== 'spanish' ? "Counter" : "Contador"}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">
                  {this.props.lang !== 'spanish' ? "Fetch" : "Obtener datos"}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/profile">
                  {this.props.lang !== 'spanish' ? "Profile" : "Perfil"}
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.lang,
  };
}

export default connect(mapStateToProps)(NavMenu);
