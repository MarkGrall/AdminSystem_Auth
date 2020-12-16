import React, { useState, Component }  from "react";
import {Button, Card, CardBody,CardHeader,CardTitle, Col,Container, Tooltip, Row,
  DropdownItem, DropdownMenu, DropdownToggle,UncontrolledDropdown
  } from "reactstrap";
import { MoreHorizontal } from "react-feather";

import { Document, Page } from 'react-pdf';

import BootstrapTable  from "react-bootstrap-table-next";
import ToolkitProvider , { CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter , numberFilter, Comparator  } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import {  MinusCircle, PlusCircle } from "react-feather";

let nameFilter;


const tableColumns = [
	  {
		dataField: "Gender",
		text: "Gender",
		sort: true			
	  },
	  {
		dataField: "Age",
		text: "Age",
		sort: true	
	  },
	  {
		dataField: "Rate",
		text: "Rate",
		sort: true	
	  },
	  {
			dataField: 'TableID',
			text: '',
			csvExport: false,
			headerStyle: (column, colIndex) => {
				return { width: 0 ,height: 0, 'visibility': 'hidden'}
			},
			filter: textFilter({
				getFilter: (filter) => {
				  // nameFilter was assigned once the component has been mounted.
				  nameFilter = filter; 
				},
				style: {'visibility': 'hidden','height':'0px'}
			}),
			style: {'visibility': 'hidden'}	
	  },
	  {
		dataField: "ID",
		text: "ID",
		csvExport: false,
		hidden: true
	   }
	];

const TableData = [
{Gender: "Male",
Age: "20",
Rate: "0.01",
TableID: "1",
ID: "1"},
{Gender: "Male",
Age: "21",
Rate: "0.015",
TableID: "1",
ID: "2"},
{Gender: "Male",
Age: "22",
Rate: "0.02",
TableID: "1",
ID: "3"},
{Gender: "Male",
Age: "23",
Rate: "0.025",
TableID: "1",
ID: "4"},
{Gender: "Male",
Age: "24",
Rate: "0.03",
TableID: "1",
ID: "5"},
{Gender: "Male",
Age: "25",
Rate: "0.035",
TableID: "1",
ID: "6"},
{Gender: "Male",
Age: "26",
Rate: "0.04",
TableID: "1",
ID: "7"},
{Gender: "Male",
Age: "27",
Rate: "0.045",
TableID: "1",
ID: "8"},
{Gender: "Male",
Age: "28",
Rate: "0.05",
TableID: "1",
ID: "9"},
{Gender: "Male",
Age: "29",
Rate: "0.055",
TableID: "1",
ID: "10"},
{Gender: "Male",
Age: "30",
Rate: "0.06",
TableID: "1",
ID: "11"},
{Gender: "Male",
Age: "31",
Rate: "0.065",
TableID: "1",
ID: "12"},
{Gender: "Male",
Age: "32",
Rate: "0.07",
TableID: "1",
ID: "13"},
{Gender: "Male",
Age: "33",
Rate: "0.075",
TableID: "1",
ID: "14"},
{Gender: "Male",
Age: "34",
Rate: "0.08",
TableID: "1",
ID: "15"},
{Gender: "Male",
Age: "35",
Rate: "0.085",
TableID: "1",
ID: "16"},
{Gender: "Male",
Age: "36",
Rate: "0.09",
TableID: "1",
ID: "17"},
{Gender: "Male",
Age: "37",
Rate: "0.095",
TableID: "1",
ID: "18"},
{Gender: "Male",
Age: "38",
Rate: "0.1",
TableID: "1",
ID: "19"},
{Gender: "Male",
Age: "39",
Rate: "0.105",
TableID: "1",
ID: "20"},
{Gender: "Male",
Age: "40",
Rate: "0.11",
TableID: "1",
ID: "21"},
{Gender: "Male",
Age: "41",
Rate: "0.115",
TableID: "1",
ID: "22"},
{Gender: "Male",
Age: "42",
Rate: "0.12",
TableID: "1",
ID: "23"},
{Gender: "Male",
Age: "43",
Rate: "0.125",
TableID: "1",
ID: "24"},
{Gender: "Male",
Age: "44",
Rate: "0.13",
TableID: "1",
ID: "25"},
{Gender: "Male",
Age: "45",
Rate: "0.135",
TableID: "1",
ID: "26"},
{Gender: "Male",
Age: "46",
Rate: "0.14",
TableID: "1",
ID: "27"},
{Gender: "Male",
Age: "47",
Rate: "0.145",
TableID: "1",
ID: "28"},
{Gender: "Male",
Age: "48",
Rate: "0.15",
TableID: "1",
ID: "29"},
{Gender: "Male",
Age: "49",
Rate: "0.155",
TableID: "1",
ID: "30"},
{Gender: "Male",
Age: "50",
Rate: "0.16",
TableID: "1",
ID: "31"},
{Gender: "Male",
Age: "51",
Rate: "0.165",
TableID: "1",
ID: "32"},
{Gender: "Male",
Age: "52",
Rate: "0.17",
TableID: "1",
ID: "33"},
{Gender: "Male",
Age: "53",
Rate: "0.175",
TableID: "1",
ID: "34"},
{Gender: "Male",
Age: "54",
Rate: "0.18",
TableID: "1",
ID: "35"},
{Gender: "Male",
Age: "55",
Rate: "0.185",
TableID: "1",
ID: "36"},
{Gender: "Male",
Age: "56",
Rate: "0.19",
TableID: "1",
ID: "37"},
{Gender: "Male",
Age: "57",
Rate: "0.195",
TableID: "1",
ID: "38"},
{Gender: "Male",
Age: "58",
Rate: "0.2",
TableID: "1",
ID: "39"},
{Gender: "Male",
Age: "59",
Rate: "0.205",
TableID: "1",
ID: "40"},
{Gender: "Male",
Age: "60",
Rate: "0.21",
TableID: "1",
ID: "41"},
{Gender: "Male",
Age: "61",
Rate: "0.215",
TableID: "1",
ID: "42"},
{Gender: "Male",
Age: "62",
Rate: "0.22",
TableID: "1",
ID: "43"},
{Gender: "Male",
Age: "63",
Rate: "0.225",
TableID: "1",
ID: "44"},
{Gender: "Male",
Age: "64",
Rate: "0.23",
TableID: "1",
ID: "45"},
{Gender: "Male",
Age: "65",
Rate: "0.235",
TableID: "1",
ID: "46"},
{Gender: "Male",
Age: "66",
Rate: "0.24",
TableID: "1",
ID: "47"},
{Gender: "Male",
Age: "67",
Rate: "0.245",
TableID: "1",
ID: "48"},
{Gender: "Male",
Age: "68",
Rate: "0.25",
TableID: "1",
ID: "49"},
{Gender: "Male",
Age: "69",
Rate: "0.255",
TableID: "1",
ID: "50"},
{Gender: "Male",
Age: "70",
Rate: "0.26",
TableID: "1",
ID: "51"},
{Gender: "Male",
Age: "71",
Rate: "0.265",
TableID: "1",
ID: "52"},
{Gender: "Male",
Age: "72",
Rate: "0.27",
TableID: "1",
ID: "53"},
{Gender: "Male",
Age: "73",
Rate: "0.275",
TableID: "1",
ID: "54"},
{Gender: "Male",
Age: "74",
Rate: "0.28",
TableID: "1",
ID: "55"},
{Gender: "Male",
Age: "75",
Rate: "0.285",
TableID: "1",
ID: "56"},
{Gender: "Male",
Age: "76",
Rate: "0.29",
TableID: "1",
ID: "57"},
{Gender: "Male",
Age: "77",
Rate: "0.295",
TableID: "1",
ID: "58"},
{Gender: "Male",
Age: "78",
Rate: "0.3",
TableID: "1",
ID: "59"},
{Gender: "Male",
Age: "79",
Rate: "0.305",
TableID: "1",
ID: "60"},
{Gender: "Male",
Age: "80",
Rate: "0.31",
TableID: "1",
ID: "61"},
{Gender: "Male",
Age: "81",
Rate: "0.315",
TableID: "1",
ID: "62"},
{Gender: "Male",
Age: "82",
Rate: "0.32",
TableID: "1",
ID: "63"},
{Gender: "Male",
Age: "83",
Rate: "0.325",
TableID: "1",
ID: "64"},
{Gender: "Male",
Age: "84",
Rate: "0.33",
TableID: "1",
ID: "65"},
{Gender: "Male",
Age: "85",
Rate: "0.335",
TableID: "1",
ID: "66"},
{Gender: "Male",
Age: "86",
Rate: "0.34",
TableID: "1",
ID: "67"},
{Gender: "Male",
Age: "87",
Rate: "0.345",
TableID: "1",
ID: "68"},
{Gender: "Male",
Age: "88",
Rate: "0.35",
TableID: "1",
ID: "69"},
{Gender: "Male",
Age: "89",
Rate: "0.355",
TableID: "1",
ID: "70"},
{Gender: "Male",
Age: "90",
Rate: "0.36",
TableID: "1",
ID: "71"},
{Gender: "Male",
Age: "91",
Rate: "0.365",
TableID: "1",
ID: "72"},
{Gender: "Male",
Age: "92",
Rate: "0.37",
TableID: "1",
ID: "73"},
{Gender: "Male",
Age: "93",
Rate: "0.375",
TableID: "1",
ID: "74"},
{Gender: "Male",
Age: "94",
Rate: "0.38",
TableID: "1",
ID: "75"},
{Gender: "Male",
Age: "95",
Rate: "0.385",
TableID: "1",
ID: "76"},
{Gender: "Male",
Age: "96",
Rate: "0.39",
TableID: "1",
ID: "77"},
{Gender: "Male",
Age: "97",
Rate: "0.395",
TableID: "1",
ID: "78"},
{Gender: "Male",
Age: "98",
Rate: "0.4",
TableID: "1",
ID: "79"},
{Gender: "Male",
Age: "99",
Rate: "0.405",
TableID: "1",
ID: "80"},
{Gender: "Male",
Age: "100",
Rate: "0.41",
TableID: "1",
ID: "81"},
{Gender: "Female",
Age: "20",
Rate: "0.001",
TableID: "1",
ID: "82"},
{Gender: "Female",
Age: "21",
Rate: "0.006",
TableID: "1",
ID: "83"},
{Gender: "Female",
Age: "22",
Rate: "0.011",
TableID: "1",
ID: "84"},
{Gender: "Female",
Age: "23",
Rate: "0.016",
TableID: "1",
ID: "85"},
{Gender: "Female",
Age: "24",
Rate: "0.021",
TableID: "1",
ID: "86"},
{Gender: "Female",
Age: "25",
Rate: "0.026",
TableID: "1",
ID: "87"},
{Gender: "Female",
Age: "26",
Rate: "0.031",
TableID: "1",
ID: "88"},
{Gender: "Female",
Age: "27",
Rate: "0.036",
TableID: "1",
ID: "89"},
{Gender: "Female",
Age: "28",
Rate: "0.041",
TableID: "1",
ID: "90"},
{Gender: "Female",
Age: "29",
Rate: "0.046",
TableID: "1",
ID: "91"},
{Gender: "Female",
Age: "30",
Rate: "0.051",
TableID: "1",
ID: "92"},
{Gender: "Female",
Age: "31",
Rate: "0.056",
TableID: "1",
ID: "93"},
{Gender: "Female",
Age: "32",
Rate: "0.061",
TableID: "1",
ID: "94"},
{Gender: "Female",
Age: "33",
Rate: "0.066",
TableID: "1",
ID: "95"},
{Gender: "Female",
Age: "34",
Rate: "0.071",
TableID: "1",
ID: "96"},
{Gender: "Female",
Age: "35",
Rate: "0.076",
TableID: "1",
ID: "97"},
{Gender: "Female",
Age: "36",
Rate: "0.081",
TableID: "1",
ID: "98"},
{Gender: "Female",
Age: "37",
Rate: "0.086",
TableID: "1",
ID: "99"},
{Gender: "Female",
Age: "38",
Rate: "0.091",
TableID: "1",
ID: "100"},
{Gender: "Female",
Age: "39",
Rate: "0.096",
TableID: "1",
ID: "101"},
{Gender: "Female",
Age: "40",
Rate: "0.101",
TableID: "1",
ID: "102"},
{Gender: "Female",
Age: "41",
Rate: "0.106",
TableID: "1",
ID: "103"},
{Gender: "Female",
Age: "42",
Rate: "0.111",
TableID: "1",
ID: "104"},
{Gender: "Female",
Age: "43",
Rate: "0.116",
TableID: "1",
ID: "105"},
{Gender: "Female",
Age: "44",
Rate: "0.121",
TableID: "1",
ID: "106"},
{Gender: "Female",
Age: "45",
Rate: "0.126",
TableID: "1",
ID: "107"},
{Gender: "Female",
Age: "46",
Rate: "0.131",
TableID: "1",
ID: "108"},
{Gender: "Female",
Age: "47",
Rate: "0.136",
TableID: "1",
ID: "109"},
{Gender: "Female",
Age: "48",
Rate: "0.141",
TableID: "1",
ID: "110"},
{Gender: "Female",
Age: "49",
Rate: "0.146",
TableID: "1",
ID: "111"},
{Gender: "Female",
Age: "50",
Rate: "0.151",
TableID: "1",
ID: "112"},
{Gender: "Female",
Age: "51",
Rate: "0.156",
TableID: "1",
ID: "113"},
{Gender: "Female",
Age: "52",
Rate: "0.161",
TableID: "1",
ID: "114"},
{Gender: "Female",
Age: "53",
Rate: "0.166",
TableID: "1",
ID: "115"},
{Gender: "Female",
Age: "54",
Rate: "0.171",
TableID: "1",
ID: "116"},
{Gender: "Female",
Age: "55",
Rate: "0.176",
TableID: "1",
ID: "117"},
{Gender: "Female",
Age: "56",
Rate: "0.181",
TableID: "1",
ID: "118"},
{Gender: "Female",
Age: "57",
Rate: "0.186",
TableID: "1",
ID: "119"},
{Gender: "Female",
Age: "58",
Rate: "0.191",
TableID: "1",
ID: "120"},
{Gender: "Female",
Age: "59",
Rate: "0.196",
TableID: "1",
ID: "121"},
{Gender: "Female",
Age: "60",
Rate: "0.201",
TableID: "1",
ID: "122"},
{Gender: "Female",
Age: "61",
Rate: "0.206",
TableID: "1",
ID: "123"},
{Gender: "Female",
Age: "62",
Rate: "0.211",
TableID: "1",
ID: "124"},
{Gender: "Female",
Age: "63",
Rate: "0.216",
TableID: "1",
ID: "125"},
{Gender: "Female",
Age: "64",
Rate: "0.221",
TableID: "1",
ID: "126"},
{Gender: "Female",
Age: "65",
Rate: "0.226",
TableID: "1",
ID: "127"},
{Gender: "Female",
Age: "66",
Rate: "0.231",
TableID: "1",
ID: "128"},
{Gender: "Female",
Age: "67",
Rate: "0.236",
TableID: "1",
ID: "129"},
{Gender: "Female",
Age: "68",
Rate: "0.241",
TableID: "1",
ID: "130"},
{Gender: "Female",
Age: "69",
Rate: "0.246",
TableID: "1",
ID: "131"},
{Gender: "Female",
Age: "70",
Rate: "0.251",
TableID: "1",
ID: "132"},
{Gender: "Female",
Age: "71",
Rate: "0.256",
TableID: "1",
ID: "133"},
{Gender: "Female",
Age: "72",
Rate: "0.261",
TableID: "1",
ID: "134"},
{Gender: "Female",
Age: "73",
Rate: "0.266",
TableID: "1",
ID: "135"},
{Gender: "Female",
Age: "74",
Rate: "0.271",
TableID: "1",
ID: "136"},
{Gender: "Female",
Age: "75",
Rate: "0.276",
TableID: "1",
ID: "137"},
{Gender: "Female",
Age: "76",
Rate: "0.281",
TableID: "1",
ID: "138"},
{Gender: "Female",
Age: "77",
Rate: "0.286",
TableID: "1",
ID: "139"},
{Gender: "Female",
Age: "78",
Rate: "0.291",
TableID: "1",
ID: "140"},
{Gender: "Female",
Age: "79",
Rate: "0.296",
TableID: "1",
ID: "141"},
{Gender: "Female",
Age: "80",
Rate: "0.301",
TableID: "1",
ID: "142"},
{Gender: "Female",
Age: "81",
Rate: "0.306",
TableID: "1",
ID: "143"},
{Gender: "Female",
Age: "82",
Rate: "0.311",
TableID: "1",
ID: "144"},
{Gender: "Female",
Age: "83",
Rate: "0.316",
TableID: "1",
ID: "145"},
{Gender: "Female",
Age: "84",
Rate: "0.321",
TableID: "1",
ID: "146"},
{Gender: "Female",
Age: "85",
Rate: "0.326",
TableID: "1",
ID: "147"},
{Gender: "Female",
Age: "86",
Rate: "0.331",
TableID: "1",
ID: "148"},
{Gender: "Female",
Age: "87",
Rate: "0.336",
TableID: "1",
ID: "149"},
{Gender: "Female",
Age: "88",
Rate: "0.341",
TableID: "1",
ID: "150"},
{Gender: "Female",
Age: "89",
Rate: "0.346",
TableID: "1",
ID: "151"},
{Gender: "Female",
Age: "90",
Rate: "0.351",
TableID: "1",
ID: "152"},
{Gender: "Female",
Age: "91",
Rate: "0.356",
TableID: "1",
ID: "153"},
{Gender: "Female",
Age: "92",
Rate: "0.361",
TableID: "1",
ID: "154"},
{Gender: "Female",
Age: "93",
Rate: "0.366",
TableID: "1",
ID: "155"},
{Gender: "Female",
Age: "94",
Rate: "0.371",
TableID: "1",
ID: "156"},
{Gender: "Female",
Age: "95",
Rate: "0.376",
TableID: "1",
ID: "157"},
{Gender: "Female",
Age: "96",
Rate: "0.381",
TableID: "1",
ID: "158"},
{Gender: "Female",
Age: "97",
Rate: "0.386",
TableID: "1",
ID: "159"},
{Gender: "Female",
Age: "98",
Rate: "0.391",
TableID: "1",
ID: "160"},
{Gender: "Female",
Age: "99",
Rate: "0.396",
TableID: "1",
ID: "161"},
{Gender: "Female",
Age: "100",
Rate: "0.401",
TableID: "1",
ID: "162"},
{Gender: "Male",
Age: "20",
Rate: "0.0025",
TableID: "2",
ID: "163"},
{Gender: "Male",
Age: "21",
Rate: "0.0075",
TableID: "2",
ID: "164"},
{Gender: "Male",
Age: "22",
Rate: "0.0125",
TableID: "2",
ID: "165"},
{Gender: "Male",
Age: "23",
Rate: "0.0175",
TableID: "2",
ID: "166"},
{Gender: "Male",
Age: "24",
Rate: "0.0225",
TableID: "2",
ID: "167"},
{Gender: "Male",
Age: "25",
Rate: "0.0275",
TableID: "2",
ID: "168"},
{Gender: "Male",
Age: "26",
Rate: "0.0325",
TableID: "2",
ID: "169"},
{Gender: "Male",
Age: "27",
Rate: "0.0375",
TableID: "2",
ID: "170"},
{Gender: "Male",
Age: "28",
Rate: "0.0425",
TableID: "2",
ID: "171"},
{Gender: "Male",
Age: "29",
Rate: "0.0475",
TableID: "2",
ID: "172"},
{Gender: "Male",
Age: "30",
Rate: "0.0525",
TableID: "2",
ID: "173"},
{Gender: "Male",
Age: "31",
Rate: "0.0575",
TableID: "2",
ID: "174"},
{Gender: "Male",
Age: "32",
Rate: "0.0625",
TableID: "2",
ID: "175"},
{Gender: "Male",
Age: "33",
Rate: "0.0675",
TableID: "2",
ID: "176"},
{Gender: "Male",
Age: "34",
Rate: "0.0725",
TableID: "2",
ID: "177"},
{Gender: "Male",
Age: "35",
Rate: "0.0775",
TableID: "2",
ID: "178"},
{Gender: "Male",
Age: "36",
Rate: "0.0825",
TableID: "2",
ID: "179"},
{Gender: "Male",
Age: "37",
Rate: "0.0875",
TableID: "2",
ID: "180"},
{Gender: "Male",
Age: "38",
Rate: "0.0925",
TableID: "2",
ID: "181"},
{Gender: "Male",
Age: "39",
Rate: "0.0975",
TableID: "2",
ID: "182"},
{Gender: "Male",
Age: "40",
Rate: "0.1025",
TableID: "2",
ID: "183"},
{Gender: "Male",
Age: "41",
Rate: "0.1075",
TableID: "2",
ID: "184"},
{Gender: "Male",
Age: "42",
Rate: "0.1125",
TableID: "2",
ID: "185"},
{Gender: "Male",
Age: "43",
Rate: "0.1175",
TableID: "2",
ID: "186"},
{Gender: "Male",
Age: "44",
Rate: "0.1225",
TableID: "2",
ID: "187"},
{Gender: "Male",
Age: "45",
Rate: "0.1275",
TableID: "2",
ID: "188"},
{Gender: "Male",
Age: "46",
Rate: "0.1325",
TableID: "2",
ID: "189"},
{Gender: "Male",
Age: "47",
Rate: "0.1375",
TableID: "2",
ID: "190"},
{Gender: "Male",
Age: "48",
Rate: "0.1425",
TableID: "2",
ID: "191"},
{Gender: "Male",
Age: "49",
Rate: "0.1475",
TableID: "2",
ID: "192"},
{Gender: "Male",
Age: "50",
Rate: "0.1525",
TableID: "2",
ID: "193"},
{Gender: "Male",
Age: "51",
Rate: "0.1575",
TableID: "2",
ID: "194"},
{Gender: "Male",
Age: "52",
Rate: "0.1625",
TableID: "2",
ID: "195"},
{Gender: "Male",
Age: "53",
Rate: "0.1675",
TableID: "2",
ID: "196"},
{Gender: "Male",
Age: "54",
Rate: "0.1725",
TableID: "2",
ID: "197"},
{Gender: "Male",
Age: "55",
Rate: "0.1775",
TableID: "2",
ID: "198"},
{Gender: "Male",
Age: "56",
Rate: "0.1825",
TableID: "2",
ID: "199"},
{Gender: "Male",
Age: "57",
Rate: "0.1875",
TableID: "2",
ID: "200"},
{Gender: "Male",
Age: "58",
Rate: "0.1925",
TableID: "2",
ID: "201"},
{Gender: "Male",
Age: "59",
Rate: "0.1975",
TableID: "2",
ID: "202"},
{Gender: "Male",
Age: "60",
Rate: "0.2025",
TableID: "2",
ID: "203"},
{Gender: "Male",
Age: "61",
Rate: "0.2075",
TableID: "2",
ID: "204"},
{Gender: "Male",
Age: "62",
Rate: "0.2125",
TableID: "2",
ID: "205"},
{Gender: "Male",
Age: "63",
Rate: "0.2175",
TableID: "2",
ID: "206"},
{Gender: "Male",
Age: "64",
Rate: "0.2225",
TableID: "2",
ID: "207"},
{Gender: "Male",
Age: "65",
Rate: "0.2275",
TableID: "2",
ID: "208"},
{Gender: "Male",
Age: "66",
Rate: "0.2325",
TableID: "2",
ID: "209"},
{Gender: "Male",
Age: "67",
Rate: "0.2375",
TableID: "2",
ID: "210"},
{Gender: "Male",
Age: "68",
Rate: "0.2425",
TableID: "2",
ID: "211"},
{Gender: "Male",
Age: "69",
Rate: "0.2475",
TableID: "2",
ID: "212"},
{Gender: "Male",
Age: "70",
Rate: "0.2525",
TableID: "2",
ID: "213"},
{Gender: "Male",
Age: "71",
Rate: "0.2575",
TableID: "2",
ID: "214"},
{Gender: "Male",
Age: "72",
Rate: "0.2625",
TableID: "2",
ID: "215"},
{Gender: "Male",
Age: "73",
Rate: "0.2675",
TableID: "2",
ID: "216"},
{Gender: "Male",
Age: "74",
Rate: "0.2725",
TableID: "2",
ID: "217"},
{Gender: "Male",
Age: "75",
Rate: "0.2775",
TableID: "2",
ID: "218"},
{Gender: "Male",
Age: "76",
Rate: "0.2825",
TableID: "2",
ID: "219"},
{Gender: "Male",
Age: "77",
Rate: "0.2875",
TableID: "2",
ID: "220"},
{Gender: "Male",
Age: "78",
Rate: "0.2925",
TableID: "2",
ID: "221"},
{Gender: "Male",
Age: "79",
Rate: "0.2975",
TableID: "2",
ID: "222"},
{Gender: "Male",
Age: "80",
Rate: "0.3025",
TableID: "2",
ID: "223"},
{Gender: "Male",
Age: "81",
Rate: "0.3075",
TableID: "2",
ID: "224"},
{Gender: "Male",
Age: "82",
Rate: "0.3125",
TableID: "2",
ID: "225"},
{Gender: "Male",
Age: "83",
Rate: "0.3175",
TableID: "2",
ID: "226"},
{Gender: "Male",
Age: "84",
Rate: "0.3225",
TableID: "2",
ID: "227"},
{Gender: "Male",
Age: "85",
Rate: "0.3275",
TableID: "2",
ID: "228"},
{Gender: "Male",
Age: "86",
Rate: "0.3325",
TableID: "2",
ID: "229"},
{Gender: "Male",
Age: "87",
Rate: "0.3375",
TableID: "2",
ID: "230"},
{Gender: "Male",
Age: "88",
Rate: "0.3425",
TableID: "2",
ID: "231"},
{Gender: "Male",
Age: "89",
Rate: "0.3475",
TableID: "2",
ID: "232"},
{Gender: "Male",
Age: "90",
Rate: "0.3525",
TableID: "2",
ID: "233"},
{Gender: "Male",
Age: "91",
Rate: "0.3575",
TableID: "2",
ID: "234"},
{Gender: "Male",
Age: "92",
Rate: "0.3625",
TableID: "2",
ID: "235"},
{Gender: "Male",
Age: "93",
Rate: "0.3675",
TableID: "2",
ID: "236"},
{Gender: "Male",
Age: "94",
Rate: "0.3725",
TableID: "2",
ID: "237"},
{Gender: "Male",
Age: "95",
Rate: "0.3775",
TableID: "2",
ID: "238"},
{Gender: "Male",
Age: "96",
Rate: "0.3825",
TableID: "2",
ID: "239"},
{Gender: "Male",
Age: "97",
Rate: "0.3875",
TableID: "2",
ID: "240"},
{Gender: "Male",
Age: "98",
Rate: "0.3925",
TableID: "2",
ID: "241"},
{Gender: "Male",
Age: "99",
Rate: "0.3975",
TableID: "2",
ID: "242"},
{Gender: "Male",
Age: "100",
Rate: "0.4025",
TableID: "2",
ID: "243"},
{Gender: "Female",
Age: "20",
Rate: "0.003",
TableID: "2",
ID: "244"},
{Gender: "Female",
Age: "21",
Rate: "0.008",
TableID: "2",
ID: "245"},
{Gender: "Female",
Age: "22",
Rate: "0.013",
TableID: "2",
ID: "246"},
{Gender: "Female",
Age: "23",
Rate: "0.018",
TableID: "2",
ID: "247"},
{Gender: "Female",
Age: "24",
Rate: "0.023",
TableID: "2",
ID: "248"},
{Gender: "Female",
Age: "25",
Rate: "0.028",
TableID: "2",
ID: "249"},
{Gender: "Female",
Age: "26",
Rate: "0.033",
TableID: "2",
ID: "250"},
{Gender: "Female",
Age: "27",
Rate: "0.038",
TableID: "2",
ID: "251"},
{Gender: "Female",
Age: "28",
Rate: "0.043",
TableID: "2",
ID: "252"},
{Gender: "Female",
Age: "29",
Rate: "0.048",
TableID: "2",
ID: "253"},
{Gender: "Female",
Age: "30",
Rate: "0.053",
TableID: "2",
ID: "254"},
{Gender: "Female",
Age: "31",
Rate: "0.058",
TableID: "2",
ID: "255"},
{Gender: "Female",
Age: "32",
Rate: "0.063",
TableID: "2",
ID: "256"},
{Gender: "Female",
Age: "33",
Rate: "0.068",
TableID: "2",
ID: "257"},
{Gender: "Female",
Age: "34",
Rate: "0.073",
TableID: "2",
ID: "258"},
{Gender: "Female",
Age: "35",
Rate: "0.078",
TableID: "2",
ID: "259"},
{Gender: "Female",
Age: "36",
Rate: "0.083",
TableID: "2",
ID: "260"},
{Gender: "Female",
Age: "37",
Rate: "0.088",
TableID: "2",
ID: "261"},
{Gender: "Female",
Age: "38",
Rate: "0.093",
TableID: "2",
ID: "262"},
{Gender: "Female",
Age: "39",
Rate: "0.098",
TableID: "2",
ID: "263"},
{Gender: "Female",
Age: "40",
Rate: "0.103",
TableID: "2",
ID: "264"},
{Gender: "Female",
Age: "41",
Rate: "0.108",
TableID: "2",
ID: "265"},
{Gender: "Female",
Age: "42",
Rate: "0.113",
TableID: "2",
ID: "266"},
{Gender: "Female",
Age: "43",
Rate: "0.118",
TableID: "2",
ID: "267"},
{Gender: "Female",
Age: "44",
Rate: "0.123",
TableID: "2",
ID: "268"},
{Gender: "Female",
Age: "45",
Rate: "0.128",
TableID: "2",
ID: "269"},
{Gender: "Female",
Age: "46",
Rate: "0.133",
TableID: "2",
ID: "270"},
{Gender: "Female",
Age: "47",
Rate: "0.138",
TableID: "2",
ID: "271"},
{Gender: "Female",
Age: "48",
Rate: "0.143",
TableID: "2",
ID: "272"},
{Gender: "Female",
Age: "49",
Rate: "0.148",
TableID: "2",
ID: "273"},
{Gender: "Female",
Age: "50",
Rate: "0.153",
TableID: "2",
ID: "274"},
{Gender: "Female",
Age: "51",
Rate: "0.158",
TableID: "2",
ID: "275"},
{Gender: "Female",
Age: "52",
Rate: "0.163",
TableID: "2",
ID: "276"},
{Gender: "Female",
Age: "53",
Rate: "0.168",
TableID: "2",
ID: "277"},
{Gender: "Female",
Age: "54",
Rate: "0.173",
TableID: "2",
ID: "278"},
{Gender: "Female",
Age: "55",
Rate: "0.178",
TableID: "2",
ID: "279"},
{Gender: "Female",
Age: "56",
Rate: "0.183",
TableID: "2",
ID: "280"},
{Gender: "Female",
Age: "57",
Rate: "0.188",
TableID: "2",
ID: "281"},
{Gender: "Female",
Age: "58",
Rate: "0.193",
TableID: "2",
ID: "282"},
{Gender: "Female",
Age: "59",
Rate: "0.198",
TableID: "2",
ID: "283"},
{Gender: "Female",
Age: "60",
Rate: "0.203",
TableID: "2",
ID: "284"},
{Gender: "Female",
Age: "61",
Rate: "0.208",
TableID: "2",
ID: "285"},
{Gender: "Female",
Age: "62",
Rate: "0.213",
TableID: "2",
ID: "286"},
{Gender: "Female",
Age: "63",
Rate: "0.218",
TableID: "2",
ID: "287"},
{Gender: "Female",
Age: "64",
Rate: "0.223",
TableID: "2",
ID: "288"},
{Gender: "Female",
Age: "65",
Rate: "0.228",
TableID: "2",
ID: "289"},
{Gender: "Female",
Age: "66",
Rate: "0.233",
TableID: "2",
ID: "290"},
{Gender: "Female",
Age: "67",
Rate: "0.238",
TableID: "2",
ID: "291"},
{Gender: "Female",
Age: "68",
Rate: "0.243",
TableID: "2",
ID: "292"},
{Gender: "Female",
Age: "69",
Rate: "0.248",
TableID: "2",
ID: "293"},
{Gender: "Female",
Age: "70",
Rate: "0.253",
TableID: "2",
ID: "294"},
{Gender: "Female",
Age: "71",
Rate: "0.258",
TableID: "2",
ID: "295"},
{Gender: "Female",
Age: "72",
Rate: "0.263",
TableID: "2",
ID: "296"},
{Gender: "Female",
Age: "73",
Rate: "0.268",
TableID: "2",
ID: "297"},
{Gender: "Female",
Age: "74",
Rate: "0.273",
TableID: "2",
ID: "298"},
{Gender: "Female",
Age: "75",
Rate: "0.278",
TableID: "2",
ID: "299"},
{Gender: "Female",
Age: "76",
Rate: "0.283",
TableID: "2",
ID: "300"},
{Gender: "Female",
Age: "77",
Rate: "0.288",
TableID: "2",
ID: "301"},
{Gender: "Female",
Age: "78",
Rate: "0.293",
TableID: "2",
ID: "302"},
{Gender: "Female",
Age: "79",
Rate: "0.298",
TableID: "2",
ID: "303"},
{Gender: "Female",
Age: "80",
Rate: "0.303",
TableID: "2",
ID: "304"},
{Gender: "Female",
Age: "81",
Rate: "0.308",
TableID: "2",
ID: "305"},
{Gender: "Female",
Age: "82",
Rate: "0.313",
TableID: "2",
ID: "306"},
{Gender: "Female",
Age: "83",
Rate: "0.318",
TableID: "2",
ID: "307"},
{Gender: "Female",
Age: "84",
Rate: "0.323",
TableID: "2",
ID: "308"},
{Gender: "Female",
Age: "85",
Rate: "0.328",
TableID: "2",
ID: "309"},
{Gender: "Female",
Age: "86",
Rate: "0.333",
TableID: "2",
ID: "310"},
{Gender: "Female",
Age: "87",
Rate: "0.338",
TableID: "2",
ID: "311"},
{Gender: "Female",
Age: "88",
Rate: "0.343",
TableID: "2",
ID: "312"},
{Gender: "Female",
Age: "89",
Rate: "0.348",
TableID: "2",
ID: "313"},
{Gender: "Female",
Age: "90",
Rate: "0.353",
TableID: "2",
ID: "314"},
{Gender: "Female",
Age: "91",
Rate: "0.358",
TableID: "2",
ID: "315"},
{Gender: "Female",
Age: "92",
Rate: "0.363",
TableID: "2",
ID: "316"},
{Gender: "Female",
Age: "93",
Rate: "0.368",
TableID: "2",
ID: "317"},
{Gender: "Female",
Age: "94",
Rate: "0.373",
TableID: "2",
ID: "318"},
{Gender: "Female",
Age: "95",
Rate: "0.378",
TableID: "2",
ID: "319"},
{Gender: "Female",
Age: "96",
Rate: "0.383",
TableID: "2",
ID: "320"},
{Gender: "Female",
Age: "97",
Rate: "0.388",
TableID: "2",
ID: "321"},
{Gender: "Female",
Age: "98",
Rate: "0.393",
TableID: "2",
ID: "322"},
{Gender: "Female",
Age: "99",
Rate: "0.398",
TableID: "2",
ID: "323"},
{Gender: "Female",
Age: "100",
Rate: "0.403",
TableID: "2",
ID: "324"}


]



const handleClick = (TableNumber) => {
	  nameFilter(TableNumber);
	};

class ExpandableRowsTable_2ndTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				TableNumber_State: this.props.TableNumber_Prop
			}
	}
	  
	componentDidMount() {
		handleClick (this.state.TableNumber_State) 
	}

	componentDidUpdate() {
		//this.setState({TableNumber_State: this.props.TableNumber_Prop})
		//alert( 'State is ' + this.state.TableNumber_State  +  'Prop is ' + this.props.TableNumber_Prop );
		//handleClick (this.props.TableNumber_Prop) 
	}
	

	
//Testing - ExpandableRowsTable_2ndTable - state   {this.state.TableNumber_State }   - Prop  {this.props.TableNumber_Prop}	
	render() {    

		const MyExportCSV = props => {
			const handleClick = () => {
			  props.onExport();
			};
			return (
			  <div>
				<Row>
				<button className="btn btn-primary mt-0 mb-1 mr-2" onClick={handleClick}>
				  Export
				</button>
				<button className="btn btn-secondary mt-0 mb-1" onClick={handleClick}>
				  Upload Table
				</button>

				</Row>
			  </div>
			);
		};
	
		return (
			<ToolkitProvider
				data={TableData}
				columns={tableColumns}
				keyField="TableNumber"
				exportCSV={ { onlyExportFiltered: true, exportAll: false } }
				
			  >
				{props => (
				  <div>
				    <MyExportCSV {...props.csvProps} />
					
					<BootstrapTable
						{...props.baseProps}
						keyField="ID"
						bordered={false}
						data={TableData}
						columns={tableColumns}
						filter={ filterFactory() }
						cellEdit={ cellEditFactory({
							mode: 'click',
							blurToSave: true
					  }) }
					/>
				  </div>
				)}
			</ToolkitProvider>
		);
	};
};

class Container_2ndTable extends React.Component{
    constructor(props){
        super(props);
		this.state = {
				TableNumber_State: this.props.TableNumber_Prop
			}
    }
	//"Testing - Container_2ndTable " + {this.props.TableNumber_Prop}	
    render(){
        return(
			<Container fluid className="p-0">
				<Card className="card-margin">
					<CardHeader>
					  <div className="card-actions float-right">
						<UncontrolledDropdown>
						  <DropdownToggle tag="a">
							<MoreHorizontal />
						  </DropdownToggle>
						  <DropdownMenu right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem>Something else here</DropdownItem>
						  </DropdownMenu>
						</UncontrolledDropdown>
					  </div>
					   <CardTitle id="HeaderID" tag="h3" className="mb-1" >
						  {this.props.TableName} - Table 
					  </CardTitle>
					</CardHeader>
					<CardBody>
					  <ExpandableRowsTable_2ndTable TableNumber_Prop = {this.props.TableNumber_Prop} TableName= {this.props.TableName} />	
					</CardBody>
				</Card>
			  </Container>
        )
    }
}	





export default Container_2ndTable;
