import React, { Component } from 'react'
import { Progress } from 'reactstrap'
class ProgressBar extends Component {
    render() {
        return (
            <div>
                I am a progress bar!
                <Progress multi>
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                    <Progress bar color="warning" value="20" />
                    <Progress bar color="danger" value="5" />
                </Progress>
            </div>
        )
    }
}

export default ProgressBar;