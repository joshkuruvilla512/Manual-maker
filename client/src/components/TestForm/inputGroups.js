import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API";

const Example = (props) => {


    return (

        <>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
            </Form>
        </>
    )

}
