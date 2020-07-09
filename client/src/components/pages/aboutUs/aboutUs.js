import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class AboutUs extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <h1>About Us</h1>
                {/* <input>Testing</input> */}
                <p>I was thinking, 3 columns for each of us. With photos and whatnot.</p>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>

        );
    }
}

export default AboutUs;