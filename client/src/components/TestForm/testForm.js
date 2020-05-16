import React, { setState, useState } from "react";
import API from "../../utils/API";
import { generateHTML } from "../pages/generatePDF/generate1";
// import generateHTML1 from "../pages/generatePDF/generate1";
// import fs from "fs";
// import path from "path";
import jsPDF from "jspdf";
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

import ProgressBar from "../utilityComponents/ProgressBar";

const Forms = () => {

    function generate() {
        API.getInfo()
            .then(res => {
                const dbTitle = res.data[0].title;
                // console.log(dbTitle);
                // console.log(generateHTML(dbTitle));
                var doc = new jsPDF('p', 'pt');
                //add some text to pd
                doc.text(20, 20, generateHTML(dbTitle));
                //set the font 
                doc.setFont("courier");
                //set the dont type
                doc.setFontType('normal');
                // doc.text(20, 30, 'this is the text with courier font');
                //save the doc
                doc.save('generated.pdf');
            })
    };
    //setting state for the input field.
    const [manualState, setManualState] = useState({
        company_name: "",
        category: "",
        sections: []
    });

    const [sectionState, setSectionState] = useState({
        category: "",
        section: "",
        data: ""
    });
    // console.log(manualState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(manualState);
        //data is holding the set up for API.addInfo, it needs to look like this to log correctly. 
        const data = {
            company_name: manualState.company_name,
            category: manualState.category,
            sections: manualState.sections
        };

        // const infoData = manualState;
        console.log(data);

        //Something with the API call or the connection to DB is messing up.
        API.createManual(data)
            .then(res => {
                console.log("After Request");
                console.log(res.data);
                // console.log(res)
            })
            .catch(err => console.log(err));
    };

    const handleSection = (e) => {
        e.preventDefault();

        const sectionData = {
            category: sectionState.category,
            section: sectionState.section,
            data: sectionState.data
        }
        console.log(sectionData);

        API.createSection(sectionData)
            .then(res => {
                console.log("After Request");
                console.log(res.data);
            })
            .catch(err => console.log(err))
        }
    

    return (
        <div>
            <FormGroup className="has-success">
                <h2>This is the test form page.</h2>
                <Label for="success" className="control-label">Company Name: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setManualState( {...manualState, company_name : event.target.value })}

                />
                 <Label for="success" className="control-label">Category: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setManualState( {...manualState, category : event.target.value })}

                />

                <Button color="secondary" size="lg" onClick={handleSubmit}>Button</Button>

            </FormGroup>

            <FormGroup className="has-success">
                <h2>This is the test form page.</h2>
                <Label for="success" className="control-label">Section Category: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setSectionState( {...sectionState, category : event.target.value })}

                />
                 <Label for="success" className="control-label">Section Header: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setSectionState( {...sectionState, section : event.target.value })}

                />
                  <Label for="success" className="control-label">Data: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setSectionState( {...sectionState, data : event.target.value })}

                />
                <Button color="secondary" size="lg" onClick={handleSection}>Button</Button>
                <Button color="secondary" size="lg" onClick={generate}>Generate</Button>

                <Button id="buttonButton" color="secondary" size="lg" onClick={handleSubmit}>Button</Button>
                <Button id="generateButton" color="secondary" size="lg" onClick={generate}>Generate</Button>


            </FormGroup>

            <ProgressBar />
        </div>
    );

};
export default Forms;

