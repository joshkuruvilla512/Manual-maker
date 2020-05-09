import React, { setState, useState } from "react";
import API from "../../utils/API";
// import generateHTML1 from "../pages/generatePDF/generate1";
// import fs from "fs";
// import path from "path";

import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

function generateHTML(data) {
    console.log("Generate PDF");
    console.log(data);
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>GENERATE 1</title>
        
     </head>
     <body>
        <h1> Name: ${data} </h1>
     </body>
  </html>`;
}

const Forms = () => {



    function generate() {
        API.getInfo()
            .then(res => {
                const dbTitle = res.data[0].title;
                console.log(dbTitle);
                console.log(generateHTML(dbTitle));
                
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
                <Button color="secondary" size="lg" onClick={handleSubmit}>Button</Button>
                <Button color="secondary" size="lg" onClick={generate}>Generate</Button>

            </FormGroup>
        </>
    );
};

export default Forms;

