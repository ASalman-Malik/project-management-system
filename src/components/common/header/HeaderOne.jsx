import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const navigationData = [
    {
      title: "Home",
      link: "/home",
      children: [
        {
          title: "Subpage 1",
          link: "/subpage1",
        },
        {
          title: "Subpage 2",
          link: "/subpage2",
          children: [
            {
              title: "Sub-subpage A",
              link: "/subsubpagea",
            },
            {
              title: "Sub-subpage B",
              link: "/subsubpageb",
            },
          ],
        },
      ],
    },
    // ...more navigation items
  ];
const HeaderOne = () => {
  return (
   <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <DynamicNavbar navigationData={navigationData} />
   </>
  )
}

const NavigationItem = ({ item }) => (
    <Nav.Item>
      <Nav.Link href={item.link}>{item.title}</Nav.Link>
      {item.children && (
        <Nav className="ml-3">
          {item.children.map((child) => (
            <NavigationItem key={child.title} item={child} />
          ))}
        </Nav>
      )}
    </Nav.Item>
  );
  
  const DynamicNavbar = ({ navigationData }) => (
    <Navbar>
      <Nav>
        {navigationData.map((item) => (
          <NavigationItem key={item.title} item={item} />
        ))}
      </Nav>
    </Navbar>
  );

export default HeaderOne