import React, { useState } from "react";
import API from "../../utils/API";

import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

//not sure this is the way to go, but worth a shot. 
//Wanted to get the logic down before we started design



const Forms = () => {

    const [formState, setFormState] = useState({
        title: ""
    });
    // console.log(formState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
    }

    // console.log(this.state);

    // API.saveInfo({
    //     title: this.title
    // })
    // console.log(this.title.target.value);


    return (
        <>
            <FormGroup className="has-success">
                <Label for="success" className="control-label">Testing: </Label>
                <Input
                    type="text"
                    name="success"
                    id="success"   
                    onChange={e => setFormState(e.target.value)}                                 

                />
                <Button color="secondary" size="lg" onClick={handleSubmit}>Button</Button>
            </FormGroup>
        </>
    );
};

export default Forms;

