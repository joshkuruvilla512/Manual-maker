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


    const [manualType, setManualType] = useState([]);
    const [options, setOptions] = useState([])

    const get_info = (manualType) => {
        // console.log(manualType)
        API.getInfo(manualType)
            .then(res => {
                setOptions(res.data)
            })
            .catch((err) => console.log(err))

        console.log(options);
    }
    const handleChange = (e) => {
        setManualType(e.target.id)
        get_info(e.target.id);
        setManualType(e.target.id)
    }

    return (
        <div>
            <FormGroup onChange={(e) => handleChange(e)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Steel Erection"/>{' '}
                    Steel Erection            
                </Label>
            </FormGroup>
            <FormGroup onChange={(e) => handleChange(e)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Fabricator" />{' '}
                    Fabrication            
                </Label>


            </FormGroup>
            <Button onClick={() => get_info(manualType)} color="secondary" size="lg">Next</Button>

        </div>
    );

};
export default Forms;

