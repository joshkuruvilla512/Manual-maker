import React, { useState } from "react";
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

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(formState);
        const data = {
            _id: formState.id,
            title: formState
        }

        // const infoData = formState;
        console.log(data);

        API.addInfo(data)
            .then(res => {
                console.log("After Request");
                console.log(res.data);
                // console.log(res)
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
                    onChange={e => setFormState(e.target.value)}                                 

                />
                <Button color="secondary" size="lg" onClick={handleSubmit}>Button</Button>
            </FormGroup>
        </>
    );
};

export default Forms;

