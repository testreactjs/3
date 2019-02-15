import React from 'react'
import * as actions from './redux/actions'
import { connect } from 'react-redux'

class StaffMemberProfile extends React.Component {
    state = {
        isFetching: true,
    }

    componentDidMount = async () => {
        const { initialLoadStaffMember, match: { params: { id } } } = this.props;

        await initialLoadStaffMember(id);
        this.setState({ isFetching: false })
    }
    render() {
        console.log("StaffMemberProfile params url id", this.props.match.params.id)
        console.log(this.props);
        return (
            <div />

        )
    }
}

const mapDispatchToProps = {

    initialLoadStaffMember: actions.initialLoadActionStaffMember,
}
const mapStateToProps = store => {
    //console.log(getStaffMembers);
    return store;

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StaffMemberProfile)


