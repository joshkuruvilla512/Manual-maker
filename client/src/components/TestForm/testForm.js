import React, { setState, useState } from "react";
import API from "../../utils/API";

import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";


const Forms = () => {

    const [formState, setFormState] = useState({
        title: ""
    });
    // console.log(formState);
    const saveFormTitle = event => {
        setFormState({ ...formState, title: event.target.value });
    }

    const saveTitle = () => {
        // e.preventDefault();
        // console.log(formState);
        const data = {
            title: formState.title
        };
        console.log(data);
        console.log({ saveTitle: data });
        
        API.saveMe(data)
            .then(res => {
                console.log("After Request");
                console.log(res.data);
            })
            .catch(err => console.log(err));

      
    };

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
                    onChange={saveFormTitle}                                 

                />
                <Button color="secondary" size="lg" onClick={saveTitle}>Button</Button>
            </FormGroup>
        </>
    );
};

export default Forms;

