import React from "react";
import {
  Container,
  Row
  // Col
} from "reactstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
      userName: "svnteen"
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
        <Navbar
          userName={this.state.userName}
          getData={this.getData.bind(this)}
        />
        {/* <Container fluid={true}>
          <Row />
          <Sidebar />
        </Container> */}
        <Container style={{ marginTop: "50px", marginBottom: "15px" }}>
          <Row>
            <DataTable
              userName={this.state.userName}
              botFollowData={this.state.bot_follow_data}
              userGrowthData={this.state.user_growth_data}
            />
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
