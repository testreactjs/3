import React from 'react'


class EditProfile extends React.Component {

  render() {
    return (
      <div className="switcher">
        <div className="switcher__inner">
          <aside className="switcher__side">
              <nav className="switcher__nav">
                  <a href="#" className="switcher__nav-link switcher__nav-link_state_active">Employment Details</a>
                  <a href="#" className="switcher__nav-link" >Personal Details</a>
                  <a href="#" className="switcher__nav-link" >Contact Details</a>
              </nav>
          </aside>
        </div>
      </div>
    )
    }
}

export default EditProfile