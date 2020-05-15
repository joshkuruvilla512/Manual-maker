import React, { setState, useState } from "react";
import API from "../../utils/API";
import { generateHTML } from "../pages/generatePDF/generate1";
// import generateHTML1 from "../pages/generatePDF/generate1";
// import fs from "fs";
// import path from "path";
import jsPDF from "jspdf"


import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

const Forms = () => {



    function generate() {
        API.getInfo()
            .then(res => {
                const dbTitle = res.data[0].title;
                // console.log(dbTitle);
                // console.log(generateHTML(dbTitle));
                var doc = new jsPDF('p', 'pt');

                //add some text to pdf

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
    const [formState, setFormState] = useState("");
    // console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formState);
        //data is holding the set up for API.addInfo, it needs to look like this to log correctly. 
        const data = {
            title: formState
        };


        // const infoData = formState;
        console.log(data);

        //Something with the API call or the connection to DB is messing up.
        API.addInfo(data)
            .then(res => {
                console.log("After Request");
                console.log(res.data);
                // console.log(res)
            })
            .catch(err => console.log(err));

    };



    return (
        <>
            <FormGroup className="has-success">
                <h2>This is the test form page.</h2>
                <Label for="success" className="control-label">Testing: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"
                    //changing state like this is easier to manipulate state wise.
                    onChange={(event) => setFormState(event.target.value)}

                />
                <Button id="buttonButton" color="secondary" size="lg" onClick={handleSubmit}>Button</Button>
                <Button id="generateButton" color="secondary" size="lg" onClick={generate}>Generate</Button>

            </FormGroup>
        </>
    );
};

export default Forms;

