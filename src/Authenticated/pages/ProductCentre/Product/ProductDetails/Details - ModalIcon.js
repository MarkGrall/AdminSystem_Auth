import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,Input,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'


import { MinusCircle, PlusCircle, Edit2, HelpCircle, Trash } from "react-feather";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";


import Info_Bullet from "../../../../components/pages/InfoBullet/index";
import ModalButton from "./Modal - Add Group/ProductGroup - Modal";


const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const Info_Bullet_Data = [
  {
    type: "Bullet",
    description: "This will bring in the cloned products parameters as a starting point. Note the Cloned product will remain unaffected.",
  }
];

 const ProductList = [
	  {value: 'Select', label: 'Select...'},
      {value: 'FPB1', label: 'FPB1'},
      {value: 'FPB2', label: 'FPB2'}
    ];

 const ProductGroup_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'FPB', label: 'FPB'},
      {value: 'PIB', label: 'PIB'}
    ];


 const ProductCategory_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'PensionPlan', label: 'Pension Plan'},
      {value: 'TermAssuarance', label: 'Term Assuarance'}
    ];

 const NB_List = [
	  {value: 'Select', label: 'Select...'},
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'}
    ];



class ProductGroup extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Product Group
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ProductGroup_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};

class ProductCategory extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Product Category
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={ProductCategory_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};

class OpenToNB extends React.Component {
 constructor(props) {
    super(props)
    this.state= {
      value: new Date().toISOString()
    }
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    
  }
  render() {
    return (
			 <Form className="mb-4 "> 			
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Open to new business
				  </Label>
				  <Col sm={4}>         
					<Select
						className="react-select-container"
						classNamePrefix="react-select"
						options={NB_List}
					/>
				  </Col>
				</FormGroup>
			</Form>
	)
}};



const EditProduct = () => (
<FinalForm onSubmit={onSubmit} >
  {({ handleSubmit, form,  CustomInput, values }) => (
	<form onSubmit={handleSubmit}>
	  

	  <Card>
		<CardBody>
		  <Form className="mb-4 "> 
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Product Name
				  </Label>

				  <Col sm={4} >
					<Input name="ProductName" placeholder="Product Name" id="ProductName"  required />
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_Bullet_Data}
					header = "How long do you need cover for?"  
				  />	 
				</FormGroup>
				
				<FormGroup row>
				  <Label sm={4} className="text-sm-Left ml-2">
					Product Code
				  </Label>

				  <Col sm={4} >
					<Input name="ProductCode" placeholder="Product Code" id="ProductCode"  required />
				  </Col>
				   
				  <Info_Bullet 
					InfoDesc = {Info_Bullet_Data}
					header = "How long do you need cover for?"  
				  />	 
				</FormGroup>
				
				<ProductGroup/>
				<ProductCategory/>
				<OpenToNB />
		
		  
		 </Form>
		</CardBody>
	  </Card> 

	</form>
  )}
</FinalForm>
)

const ModalIcon = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <FontAwesomeIcon icon={faPencilAlt} className="  fa-4x text-primary mr-2 mt-0" color="primary" onClick={toggle}> {buttonLabel}  </FontAwesomeIcon>

	  <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Product Details</ModalHeader>
        <ModalBody>

			<CardBody>
			  <EditProduct/>
			</CardBody>

        </ModalBody>
        <ModalFooter>
		  <ModalButton buttonLabel="Edit Product Group/Category List" /> 	
		  <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ModalIcon;
