import React from 'react'

import User from '../User/User';
import Device from "../Device/Device";
import Customer from "../Customer/Customer";
import Location from "../Location/Location";

const components = {
    User: User,
    Device: Device,
    Customer: Customer,
    Location: Location,
};
function ModalComponent(props) {

       const TagName = components[props.model || 'User'];
       return <TagName modalIsOpen={props.modalIsOpen}
       closeModal={props.closeModal}
       labelName={props.labelName}
       onSubmit={props.onSubmit}
       model={props.model} />
}
export default ModalComponent;