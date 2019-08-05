import React from "react";
import { Table, Button, UncontrolledTooltip } from "reactstrap";
import { map, addIndex } from "ramda";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      //   userName = "null",
      botFollowData = {},
      userGrowthData = {}
    } = this.props;

    const columns = [
      {
        Header: "User ID",
        accessor: "user_id"
      },
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Date",
        accessor: "followed_date"
      },
      {
        Header: "Whitelist",
        accessor: "whitelist"
      },
      {
        Header: "Blacklist",
        accessor: "blacklist"
      },
      {
        Header: "Following",
        accessor: "us_following_them"
      },
      {
        Header: "Follower",
        accessor: "them_following_us"
      },
      {
        Header: "Scraped From",
        accessor: "scraped_from_user"
      }
    ];

    return (
      <React.Fragment>
        {!!Object.keys(botFollowData).length ? (
          <ReactTable
            className="-striped -highlight"
            defaultPageSize={100}
            sortable={true}
            multiSort={true}
            resizable={true}
            data={botFollowData}
            columns={columns}
          />
        ) : (
          <h1>no data</h1>
        )}
      </React.Fragment>
    );
  }
}
export default DataTable;
