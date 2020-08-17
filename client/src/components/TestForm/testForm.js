import React, { useState } from "react";
import API from "../../utils/API";

// import { generateHTML } from "../pages/generatePDF/generate1";
// import generateHTML1 from "../pages/generatePDF/generate1";
// import fs from "fs";
// import path from "path";
// import jsPDF from "jspdf";
import {
    Button,
    FormGroup,
    Input,
    Label
} from "reactstrap";



const Forms = () => {


    const [active, setActive] = useState(false)
    const [options, setOptions] = useState([])

    const get_info = (e) => {
        API.getInfo(e.target.id)
            .then(res => {
                setOptions(res.data)
                console.log(options)
            })
            .catch((err) => console.log(err))


    }
    const handleChange = (e) => {
        console.log(options)
        setActive(true)


    }


    return (
        <div id='container'>
            <FormGroup onChange={(e) => get_info(e)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Steel Erection" />{' '}
                    Steel Erection
                </Label>
            </FormGroup>
            <FormGroup onChange={(e) => get_info(e)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Fabricator" />{' '}
                    Fabrication
                </Label>
            </FormGroup>
            <Button onClick={() => handleChange()} color="secondary" size="lg">Next</Button>
            {active ? <div>
                {options.map(option => {
                    return (
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type='radio'
                                    id={option._id} />{' '}
                                {option.typeLevel}
                            </Label>
                        </FormGroup>

                    )
                })}
            </div> : null}

        </div>

    );

};
export default Forms;
