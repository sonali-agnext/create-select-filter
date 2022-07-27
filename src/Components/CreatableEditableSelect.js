import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import React,{useState, useMemo} from 'react';
import * as Yup from "yup";
import User from '../Components/User/User';
import Device from "./Device/Device";
import Customer from "./Customer/Customer";
import Location from "./Location/Location";

export default function CreateableEditableSelect({model,statusOptions}) {

  let createFlag = true;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [labelName, setLabelName] = React.useState('');

  const createOption = (value) => {

    console.log(value, 'create');
    openModal();
    return {value : value, label: value};
  };  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [selection, setSelection] = useState(statusOptions);

  const handleCreate = (inputValue) => {
    console.group('Option created');
    console.log('Wait a moment...');
    setLabelName(inputValue);
    setTimeout(() => {  
      console.log();    
      const newOption = createOption(inputValue);
      console.groupEnd();
    }, 1000);
  };
  const initialValues = {
    id: "",
    name: labelName,
  };
  
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Id is required"),
    name: Yup.string().required("Name is required"),
  });
  // add new dataresource in dropdown
  const onSubmit = (fields) => {
    statusOptions.push({'id': fields.id, 'name': fields.name});
    closeModal();
  };
  const formatCreateLabel = (inputValue) => `Create new... ${inputValue}`;
  // add label and value to dropdown
  const selectOptions = useMemo(() => selection.map(x => ({ value: x.id, label: x.name }),[selection]));
  return (
    <div>
      {/* if create flag is true then use CreateSelect otherwise use Select only */}
      {createFlag ?
      <CreatableSelect
        isClearable
        options={selectOptions}
        // isValidNewOption={() => createFlag ? true: false }   
        formatCreateLabel={formatCreateLabel }        
        onCreateOption={handleCreate}
      />:<Select
        isClearable
        options={selectOptions}
        formatCreateLabel={formatCreateLabel }        
        onCreateOption={handleCreate}
      />}
      {/* User Modal */}
      {model === 'User' && <User 
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        model={model}
        /> }
      
      {/* Device Modal */}
      {model === 'Device' && <Device 
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        model={model}
        /> }

      {/* Customer Modal */}    
      {model === 'Customer' && <Customer 
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          model={model}
          /> }

      {/* Location Modal */} 
      {model === 'Location' && <Location 
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          model={model}
          /> }
      
    </div>);
}
