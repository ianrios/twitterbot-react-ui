import React from "react";
import { Table, Button } from "reactstrap";
import { map, addIndex } from "ramda";
import axios from "axios";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bot_follow_data: {}, user_growth_data: {} };
  }
  async getData(un) {
    await axios
      .get(`http://localhost:8080/data/${un}/bot_follow_data.json`, {
        crossDomain: true
      })
      .then(res => {
        const bot_follow_data = res.data;
        this.setState({ bot_follow_data });
      });
    // console.log(this.state.bot_follow_data.users);
    // console.log(Object.keys(this.state.bot_follow_data.users));
  }
  render() {
    const { userName = "null" } = this.props;
    const MapIdx = addIndex(map());
    const MappedHeaders = MapIdx((item, index) => {
      return <th key={index}>{item}</th>;
    });
    const MappedData = MapIdx((item, index) => {
      return <td key={index}>{item}</td>;
    });
    const MappedRow = MapIdx((item, index) => {
      return (
        <tr key={index}>
          {MappedData(Object.values(this.state.bot_follow_data.users[item]))}
        </tr>
      );
    });
    return (
      <React.Fragment>
        <Button onClick={() => this.getData(userName)}>get data</Button>

        {!!Object.keys(this.state.bot_follow_data).length ? (
          <Table size="sm">
            <thead>
              <tr>
                {MappedHeaders(
                  Object.keys(
                    this.state.bot_follow_data.users[
                      Object.keys(this.state.bot_follow_data.users)[0]
                    ]
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {MappedRow(Object.keys(this.state.bot_follow_data.users))}
            </tbody>
          </Table>
        ) : (
          <h1>no data</h1>
        )}
      </React.Fragment>
    );
  }
}
export default DataTable;
