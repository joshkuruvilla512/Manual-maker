import React, { Component } from 'react'
import { Progress } from "@chakra-ui/core";

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <Progress value={80} color="pink" hasStripe isAnimated />
            </div>
        )
    }
}

export default ProgressBar;