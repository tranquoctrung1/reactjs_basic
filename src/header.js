/* eslint-disable jsx-a11y/alt-text */
import React, {Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,} from 'reactstrap';
    import { Container} from 'reactstrap';
import './header.sass';

// Component header trong layout
class Header extends Component {
    constructor(props) {
        super(props);
    //nút toggle dùng để ẩn và hiện danh sách các nút trung menu
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      //hàm toggle sét giá trị cho thằng collapse
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
          <section>
        <Navbar color="light" light expand="md">
          <Container>
          <NavbarBrand href="/"><img className="img-fluid" src="./img/logo.png"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home/"><span>Home</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About/"><span>About</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About/"><span>Achivement</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About/"><span>Contact</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
        </section>
        );
    }
}

export default Header;