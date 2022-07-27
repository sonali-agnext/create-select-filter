import React from 'react'

import User from '../User/User';
import Device from "../Device/Device";
import Customer from "../Customer/Customer";
import Location from "../Location/Location";

class ModalComponent extends React.Component {
    components = {
        User: User,
        Device: Device,
        Customer: Customer,
        Location: Location,
    };
    render() {
       const TagName = this.components[this.props.model || 'User'];
       return <TagName modalIsOpen={this.props.modalIsOpen}
       closeModal={this.props.closeModal}
       labelName={this.props.labelName}
       onSubmit={this.props.onSubmit}
       model={this.props.model} />
    }
}
export default ModalComponent;