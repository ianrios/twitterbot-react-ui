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
        accessor: "user_id",
        minWidth: 220,
        foldable: true
      },
      {
        Header: "Username",
        accessor: "username",
        minWidth: 150,
        Cell: props => (
          <a
            href={`https://twitter.com/${props.original.username}`}
            target="_blank"
          >
            {props.original.username}
          </a>
        )
      },
      {
        Header: "Date",
        accessor: "followed_date",
        minWidth: 120
      },
      {
        Header: "Whitelist",
        accessor: "whitelist",
        Cell: props => (
          <React.Fragment>
            {props.original.whitelist ? "True" : "False"}
          </React.Fragment>
        )
      },
      {
        Header: "Blacklist",
        accessor: "blacklist",
        Cell: props => (
          <React.Fragment>
            {props.original.blacklist ? "True" : "False"}
          </React.Fragment>
        )
      },
      {
        Header: "Following",
        accessor: "us_following_them",
        Cell: props => (
          <React.Fragment>
            {props.original.us_following_them ? "True" : "False"}
          </React.Fragment>
        )
      },
      {
        Header: "Follower",
        accessor: "them_following_us",
        Cell: props => (
          <React.Fragment>
            {props.original.them_following_us ? "True" : "False"}
          </React.Fragment>
        )
      },
      {
        Header: "Scraped From",
        accessor: "scraped_from_user",
        minWidth: 150,
        Cell: props =>
          props.original.scraped_from_user == "n" ? (
            "Not Applicable"
          ) : (
            <a
              href={`https://twitter.com/${props.original.scraped_from_user}`}
              target="_blank"
            >
              {props.original.scraped_from_user}
            </a>
          )
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
