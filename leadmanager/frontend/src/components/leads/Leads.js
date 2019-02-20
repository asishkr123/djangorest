import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads , deleteLeads} from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
    console.log(this.props);
  }
  render() {
    return (
      <Fragment>
        <h1>Header</h1>
        <table className="table table-stripped">
          <thead>
            <tr>
              <td>ID</td>
              <th>name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.leads.map(lead => {
                return(
                  <tr key = {lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td><button onClick = {() => {this.props.deleteLeads(lead.id)}} className="btn btn-sm btn-danger">Delete</button></td>
 
                 </tr>
                )
                
              })
            }
          </tbody>
        </table>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  leads: state.leads.leads
});
export default connect(
  mapStateToProps,
  { getLeads , deleteLeads }
)(Leads);
