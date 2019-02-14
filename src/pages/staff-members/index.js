import React, { Component } from 'react'
import { membersSelector } from '../../selectors'
import { store } from '../../redux/store'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import instance from '../../utils/http-service';
import ApiService from '../../utils/api-service';

export class StaffMembersList extends Component {
  state = {
    isFetching: true,
  }


  async componentDidMount() {
    //console.log("componentDidMount");
    await instance.get(ApiService.staffMembersApiURL.getPath())
      .then(response => {
      //console.log(response.data);
      store.dispatch(actions.updateStaffMembersAction(response.data))
      this.setState({isFetching: false})
    })
    .catch(error => {
      console.log("ERROR! ", error);
    });


  }


    /*
    await somePromise (store.dispatch(actions.fetchStaffMembersAction())
    .then(this.setState({ isFetching: false }))
    .catch(error=>console.log(error)))
    */



  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }
    return (
      <div className="boss-table boss-table_page_staff-members-index">
        <div className="boss-table__row">
          <div className="boss-table__cell boss-table__cell_role_header"></div>
          <div className="boss-table__cell boss-table__cell_role_header">Name</div>
          <div className="boss-table__cell boss-table__cell_role_header">Modified</div>
          <div className="boss-table__cell boss-table__cell_role_header">Status</div>
          <div className="boss-table__cell boss-table__cell_role_header">Type</div>
          <div className="boss-table__cell boss-table__cell_role_header">Master Venue</div>
          <div className="boss-table__cell boss-table__cell_role_header">Work Venues</div>
        </div>
        <div className="boss-table__row">
          <div className="boss-table__cell">
            <div className="boss-table__image">
              <a href="#" className="boss-table__link">
                <div className="boss-avatar boss-avatar_type_combined">
                  <img src="images/avatars/download.jpeg" className="boss-avatar__image" />
                </div>
              </a>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Name</p>
              <p className="boss-table__text"><a href="#" className="boss-table__link">John Doe</a></p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Modified</p>
              <p className="boss-table__text"><a href="#" className="boss-table__link">18:00 Wed 11/16/2016</a></p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Status</p>
              <p className="boss-table__text">
                <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">Enabled</button>
              </p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Type</p>
              <p className="boss-table__text"><a href="#" className="boss-table__link">Manager</a></p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Master Venue</p>
              <p className="boss-table__text"><a href="#" className="boss-table__link">Black</a></p>
            </div>
          </div>
          <div className="boss-table__cell">
            <div className="boss-table__info">
              <p className="boss-table__label">Work Venues</p>
              <p className="boss-table__text"><a href="#" className="boss-table__link">Mint Green, McCooley's</a></p>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = store => {
  return { members: membersSelector(store), };

}
export default connect(
  mapStateToProps,
)(StaffMembersList)
