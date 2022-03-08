import React from 'react';
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      {/* navbar start */}
      <Navbar
          bg="dark"
          variant="dark"
          className="d-flex justify-content-center"
        >
          <Navbar.Brand href="#home">Daftar Karyawan</Navbar.Brand>
        </Navbar>
        {/* navbar end*/}
    </div>
  )
}

export default NavbarComponent;
