import React, { Component } from 'react';
import API from "../../utils/API";

import {
    Form,
    Label,
    Input,
    Button
} from "reactstrap";


class Forms extends Component {
    //not sure this is the way to go, but worth a shot. 
    //Wanted to get the logic down before we started design
    // state = {
    //     info: [],
    //     q: ""
    // };




    // handleAddingInfo = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });

    //     console.log(this.state);

    //     API.saveInfo({
    //         title: this.title
    //     })
    //     console.log(this.title.target.value);
    // }



    render() {
        return (
            <>
               <Form></Form>
            </>
        );
    }
}


export default Forms;