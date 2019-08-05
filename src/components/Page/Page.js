import React from "react";
import {
  Container,
  Row
  // Col
} from "reactstrap";
import NavbarMain from "../Navbar/NavbarMain";
// import Sidebar from "../Sidebar/Sidebar";
import DataTable from "../Table/DataTable";
import axios from "axios";

class Page extends React.Component {
  constructor(props) {
    super(props);
    // this.getData = this.getData.bind(this);
    this.state = {
      bot_follow_data: {},
      user_growth_data: {},
      userName: "ian_rios_"
    };
  }
  async getData() {
    await axios
      .get(
        `http://localhost:8080/data/${this.state.userName}/bot_follow_data.json`
      )
      .then(res => {
        this.setState({ bot_follow_data: Object.values(res.data.users) });
      })
      .catch(e => {
        console.log(e);
      });

    console.log(this.state.bot_follow_data);
  }

  render() {
    return (
      <React.Fragment>
        <NavbarMain
          userName={this.state.userName}
          getData={this.getData.bind(this)}
        />
        {/* <Container fluid={true}>
          <Row />
          <Sidebar />
        </Container> */}
        <Container>
          <Row style={{ marginTop: "10px" }}>
            <DataTable
              userName={this.state.userName}
              botFollowData={this.state.bot_follow_data}
              userGrowthData={this.state.user_growth_data}
            />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Page;
