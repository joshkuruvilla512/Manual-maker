import React, { setState, useState } from "react";
import API from "../../utils/API";
import { generateHTML } from "../pages/generatePDF/generate1";
// import generateHTML1 from "../pages/generatePDF/generate1";
// import fs from "fs";
// import path from "path";
import jsPDF from "jspdf";
import {
    Button,
    FormGroup,
    Input,
    Label
} from "reactstrap";


const Forms = () => {


    const [manualType, setManualType] = useState([]);

    const get_info = () => {
        // console.log(manualType)
        API.getInfo(manualType)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div>
            <FormGroup onChange={(e) => setManualType(e.target.id)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Steel Erection"/>{' '}
                    Steel Erection            
                </Label>
            </FormGroup>
            <FormGroup onChange={(e) => setManualType(e.target.id)} check>
                <Label check>
                    <Input type="radio" name="radio2" id="Fabricator" />{' '}
                    Fabrication            
                </Label>


            </FormGroup>
            <Button onClick={(e) => get_info(e)} color="secondary" size="lg" >Button</Button>

        </div>
    );

};
export default Forms;

