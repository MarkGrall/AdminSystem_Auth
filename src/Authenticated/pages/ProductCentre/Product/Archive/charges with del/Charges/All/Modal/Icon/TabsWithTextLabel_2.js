import React from "react";
import { Nav, NavItem, NavLink,TabContent,TabPane } from "reactstrap";

import classnames from "classnames";

import Table from "./Table/index";
import DataParameters from "./DataParameters/index";

let ProductData_Updated;

class TabsWithTextLabel extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
	  Row: this.props.Row
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

	handleCallback = (childData) =>{
		this.props.parentCallback( this.state.Row );
	}

  render() {
	const { name, className, TabName_1,TabName_2 } = this.props;
    return (
	 
      <div className={"tab " + className}>
		<Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
			 {TabName_1} Table
            </NavLink>
          </NavItem>
		  
		  <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              {TabName_2}
            </NavLink>
          </NavItem>
		  
		</Nav> 
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Table parentCallback = {this.handleCallback} HeaderData={this.props.HeaderData} Row = {this.props.Row}  /></TabPane>
		  <TabPane tabId="2"><DataParameters parentCallback = {this.handleCallback} Row = {this.state.Row} /></TabPane>

        </TabContent>
      </div>
    );
  }
}


export default TabsWithTextLabel;
