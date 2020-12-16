import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container , Table, Row, Col, Form, FormGroup,
Button, Modal, ModalBody, ModalFooter, ModalHeader, CustomInput, Label,
  ListGroup, ListGroupItem,  DropdownToggle, DropdownMenu, UncontrolledDropdown
} from "reactstrap";

import { Form as FinalForm, Field } from 'react-final-form'

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle, Edit2, HelpCircle, Trash } from "react-feather";

import TranDetails from "./index";
import ModalButton from "./NewProduct - Modal";

import { Link } from "react-router-dom";
import { withAuth } from '@okta/okta-react';
import { withRouter } from 'react-router'
import async from "../../../components/Async";
const Product = async(() => import("../Product"));


const tableData = [
  {
    ProductCode: "FPB2",
	ProductName: "Pension Plan",
	ProductGroup: "FPB",
    ProductCategory: "Regular Premium Pension Plan",
    OpenToNB: "Yes",
	Modified: "Yes",
    PlanCount: 250,
	InForcePlanCount: 150,
	OutOfForcePlanCount: 100,
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    ProductCode: "PIB1",
	ProductName: "Investment Bond",
	ProductGroup: "PIB",
    ProductCategory: "Single Premium Bond",
    OpenToNB: "Yes",
	Modified: "Yes",
    PlanCount: 100,
	InForcePlanCount: 80,
	OutOfForcePlanCount: 20,
	RegularPremium: "No",
	Indexation: "No",
	SinglePremium: "Yes",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  }
];

const tableColumns = [
  {
    dataField: "ProductCode",
    text: "Product Code",
    sort: true

  },
  {
    dataField: "ProductName",
    text: "Product Name",
    sort: true
  },
  {
    dataField: "ProductGroup",
    text: "Product Group",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '90px', textAlign: 'Left' };
        }

  },
  {
    dataField: "ProductCategory",
    text: "Product Category",
    sort: true,
	headerStyle: (colum, colIndex) => {
          return { width: '100px',textAlign: 'Left' };
        }
  },
  
  {
    dataField: "OpenToNB",
    text: "Open to new business",
    sort: true
  },
  
  {
    dataField: "Modified",
    text: "Modified"
  },
  {
    dataField: "PlanCount",
    text: "Plan Count"
  },
  {
    dataField: "InForcePlanCount",
    text: "In-Force Plan Count"
  },
  {
    dataField: "OutOfForcePlanCount",
    text: "Out Of Force Plan Count",
	headerStyle: (colum, colIndex) => {
	  return { width: '200px',height: '10px',  textAlign: 'Left' };
	}
  },
  {
    dataField: "RegularPremium",
    text: "Regular Premium"
  },
  {
    dataField: "Indexation",
    text: "Indexation"
  },
  {
    dataField: "SinglePremium",
    text: "Single Premium"
  },
  {
    dataField: "TopUp",
    text: "TopUp Allowed"
  },
  {
    dataField: "BidOfferSpread",
    text: "Bid Offer Spread"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  }


];

const tableDataSub = [
  {
    UpdateDate: "01/01/2017",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2018",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2019",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "Yes",
	BidOfferSpread: "No",
	EarlyEncashmentCharge: "Yes"
  },
  {
    UpdateDate: "01/01/2020",
	RegularPremium: "Yes",
	Indexation: "Yes",
	SinglePremium: "No",
	TopUp: "No",
	BidOfferSpread: "Yes",
	EarlyEncashmentCharge: "No"
  }
  
];
const tableColumnsSub = [
  {
    dataField: "UpdateDate",
    text: "Update Date",
    sort: true

  },
  {
    dataField: "RegularPremium",
    text: "Regular Premium"
  },
  {
    dataField: "Indexation",
    text: "Indexation"
  },
  {
    dataField: "SinglePremium",
    text: "Single Premium"
  },
  {
    dataField: "TopUp",
    text: "TopUp Allowed"
  },
  {
    dataField: "BidOfferSpread",
    text: "Bid Offer Spread"
  },
  {
    dataField: "EarlyEncashmentCharge",
    text: "Early Encashment Charge"
  }


];
const BorderedTable = () => {
  return (
      <ToolkitProvider
        keyField="Coverage"
		data={tableDataSub}
        columns={tableColumnsSub}
      >
          {props => (
          <div>
            <CardBody>
              <BootstrapTable
                {...props.baseProps}
                bootstrap4
                bordered={true}
				data={tableDataSub}
				columns={tableColumnsSub}
              />
            </CardBody>
          </div>
        )}
      </ToolkitProvider>
  );
};


//	 onSelect: (row, isSelect, rowIndex, e) => {}
//

//		this.props.history.push({
//			pathname: '/ProductCentre/Product',
//			state: { detail: "2" }
			
//		})

const ExpandableRowsTable_1 = withRouter(class RowsTable extends React.Component {

	constructor(props, context) {
    super(props, context);
	//this.state = { selected: [ DefaultSelected ] };
	}
  
    handleOnSelect = ( row, isSelect) => {
		//this.props.history.push('/ProductCentre/Product')
		
		//this.props.history.push('/ProductCentre/Product', { detail: 'something'})
		this.props.history.push({
			pathname: '/ProductCentre/Product',
			state: "2" 			
		})

		
	//this.props.parentCallback(row);
	}
  
  

  render() { 	  
	  
	  const selectRow = {
		mode: "radio",
		clickToSelect: true,
		bgColor: "#cbecee",
		onSelect: this.handleOnSelect
	  };
	  
	  const expandRow = {
		renderer: row => (
		  <div>
			<BorderedTable />
		  </div>
		),
		showExpandColumn: true,
		expandHeaderColumnRenderer: ({ isAnyExpands }) =>
		  isAnyExpands ? (
			<MinusCircle width={16} height={16} />
		  ) : (
			<PlusCircle width={16} height={16} />
		  ),
		expandColumnRenderer: ({ expanded }) =>
		  expanded ? (
			<MinusCircle width={16} height={16} />
		  ) : (
			<PlusCircle width={16} height={16} />
		  )
	  }
	  
	  const MyExportCSV = props => {
		  const handleClick = () => {
			  props.onExport();
			};
			return (
			  <div>
				<button className="btn btn-secondary mt-2" onClick={handleClick}>
				  Export
				</button>
			  </div>
			);
	  };
	  
  return (
	<Container fluid className="p-0 ml-0">
      <ToolkitProvider
        keyField="ProductCode"
        data={tableData}
        columns={tableColumns}
        exportCSV
      >
        {props => (
			<Container className="p-0 mr-2 ml-0 ">
				<Row className=" ml-1 mb-2">
					<ModalButton buttonLabel="New Product" />
					<div className="ml-2">
						<MyExportCSV {...props.csvProps} />
					</div>
				
				</Row>

				<Row className="ml-1 mr-4 mt-0">
					  <BootstrapTable
						{...props.baseProps}
						bootstrap4
						bordered={true}
						keyField="ProductCode"
						data={tableData}
						columns={tableColumns}
						sortable={true}
						selectRow={selectRow}
						expandRow={expandRow}

						pagination={paginationFactory({
						  sizePerPage: 10,
						  sizePerPageList: [5, 10, 25, 50]
						})}
					  />
				</Row>
			</Container>
        )}
      </ToolkitProvider>
	</Container>
  )}});

//<Link to="/ProductCentre/Product">
	//			   <DropdownItem>Settings</DropdownItem>
		//	  </Link>

//onClick={handleClick}

//	<Link to="/ProductCentre/Product" >
//		<button className="btn btn-warning mt-2" data={"1"}   >
//		  View Selected Product
//		</button>
//	</Link>


class ExpandableRowsTable extends React.Component {

	constructor(props, context) {
    super(props, context);
	//this.state = { selected: [ DefaultSelected ] };
	this.state = { 
			DataRow: null,
			Prod: 'Temp1'
			
		};
	}
  
    handleOnSelect = ( row, isSelect) => {
		//alert (row.ProductCode)
		this.setState({ DataRow: row });
		this.setState({ Prod: row.ProductCode });
	}
  
    render() { 	  
	  
	  const selectRow = {
		mode: "radio",
		hideSelectColumn: true,
		clickToSelect: true,
		bgColor: "#cbecee",
		onSelect: this.handleOnSelect
	  };
	  
	  const expandRow = {
		renderer: row => (
		  <div>
			<BorderedTable />
		  </div>
		),
		showExpandColumn: true,
		expandHeaderColumnRenderer: ({ isAnyExpands }) =>
		  isAnyExpands ? (
			<MinusCircle width={16} height={16} />
		  ) : (
			<PlusCircle width={16} height={16} />
		  ),
		expandColumnRenderer: ({ expanded }) =>
		  expanded ? (
			<MinusCircle width={16} height={16} />
		  ) : (
			<PlusCircle width={16} height={16} />
		  )
	  }
	  
	  const MyExportCSV = props => {
		  const handleClick = () => {
			  props.onExport();
			};
			return (
			  <div>
				<button className="btn btn-secondary mt-2" onClick={handleClick}>
				  Export
				</button>
			  </div>
			);
	  };
	    
    return (
		<Container fluid className="p-0 ml-0">
		  <ToolkitProvider
			keyField="ProductCode"
			data={tableData}
			columns={tableColumns}
			exportCSV
		  >
			{props => (
				<Container className="p-0 mr-2 ml-0 ">
				{this.state.Prod}
					<Row className=" ml-1 mb-2">
						<ModalButton buttonLabel="New Product" />
						<div className="ml-2">
							<MyExportCSV {...props.csvProps} />
						</div>
						
						<div className="ml-2">
							<Link to={{
								pathname: "/ProductCentre/Product",
								state:{ fromProductSearch:this.state.DataRow }
							}}> 
							<button className="btn btn-warning mt-2" >
								  View Product
							</button>

							</Link>
						</div>
						
					</Row>

					<Row className="ml-1 mr-4 mt-0">
						  <BootstrapTable
							{...props.baseProps}
							bootstrap4
							bordered={true}
							keyField="ProductCode"
							data={tableData}
							columns={tableColumns}
							sortable={true}
							selectRow={selectRow}
							expandRow={expandRow}

							pagination={paginationFactory({
							  sizePerPage: 10,
							  sizePerPageList: [5, 10, 25, 50]
							})}
						  />
					</Row>
				</Container>
			)}
		  </ToolkitProvider>
		</Container>
)}};



class Tables extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: ''
		};
	}
	
	handleCallback = (childData) =>{
        this.setState({data: childData})
    }
	//"Testing - Test_Whole " + {data}
	render() {     
		const {data} = this.state;
		return (
		  <Container fluid className="p-1 ">
			<Card className="p-1 ml-0 table-container">
				<CardBody>
					<ExpandableRowsTable parentCallback = {this.handleCallback}  />
				</CardBody>
			</Card>
		  </Container>
		);
	};
};


export default Tables;
