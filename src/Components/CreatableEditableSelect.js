import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import React,{useState, useMemo} from 'react';
import ModalComponent from "./ModalComponent/ModalComponent";

export default function CreateableEditableSelect({model,statusOptions}) {

  let createFlag = true;
  const [defaultValue, setDefaultValue] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [labelName, setLabelName] = React.useState('');

  // let ModelComponent = model;

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
  
  const handleOnChange = (event) => {
    setDefaultValue(event);
    // const newOption = { label: (defaultValue !== '' ? defaultValue.label : ''), defaultValue: (defaultValue !== '' ? defaultValue.value : '') };
    console.log(event,  defaultValue,selection.selection);
  };

  // add new dataresource in dropdown
  const onSubmit = (fields) => {    
    statusOptions.push({'id': fields.id, 'name': fields.name});
    closeModal();
    setDefaultValue({ value: fields.id, label: fields.name });
  };
  const formatCreateLabel = (inputValue) => `Create new... ${inputValue}`;
  // add label and value to dropdown
  const selectOptions = useMemo(() => selection.map(x => ({ value: x.id, label: x.name }),[selection]));
  return (
    <div>
      {/* if create flag is true then use CreateSelect otherwise use Select only */}
      {createFlag ?
      <CreatableSelect
        isClearable={true}
        options={selectOptions}
        value={defaultValue} 
        formatCreateLabel={formatCreateLabel }        
        onCreateOption={handleCreate}
        onChange={handleOnChange}
      />:<Select
        isClearable={true}
        options={selectOptions}
        formatCreateLabel={formatCreateLabel }        
        onCreateOption={handleCreate}
      />}

      {/* User Modal */}
      <ModalComponent
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        labelName={labelName}
        onSubmit={onSubmit}
        model={model}
      /> 
      
    </div>);
}
