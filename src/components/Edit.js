import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn' >
      <FontAwesomeIcon icon={faChevronDown} />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Archive chat</MDBDropdownItem>
        <MDBDropdownItem link>Mute Notifications</MDBDropdownItem>
        <MDBDropdownItem link>Exit group</MDBDropdownItem>
        <MDBDropdownItem link>Pin chat</MDBDropdownItem>
        <MDBDropdownItem link>Mark as read</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}