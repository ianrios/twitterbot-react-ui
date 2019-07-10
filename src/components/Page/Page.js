import React from "react";
import {
  Container,
  Row
  // Col
} from "reactstrap";
import NavbarMain from "../Navbar/NavbarMain";
// import Sidebar from "../Sidebar/Sidebar";
import DataTable from "../Table/DataTable";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarMain />
        {/* <Container fluid={true}>
			<Row></Row>
          <Sidebar />
		</Container> */}
        <Container>
          <Row>
            <DataTable userName="svnteen" />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Page;
