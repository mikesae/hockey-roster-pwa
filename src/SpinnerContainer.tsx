import React, {Component} from 'react';
import {PulseLoader} from "react-spinners";
import {css} from "@emotion/core";
import {ISpinnerContainerProps} from "./ISpinnerContainerProps";
import {Container} from "react-bootstrap";

const override = css`
  margin: 60% auto;
`;

export default class SpinnerContainer extends Component<ISpinnerContainerProps> {
    render() {
        return (
            <Container className={this.props.className}>
                <div className="spinner-container">
                    <PulseLoader
                        css={override}
                        size={25}
                        color={"#00400e"}
                        loading={this.props.loading}
                    />
                </div>
                {!this.props.loading &&
                <>{this.props.children}</>
                }
            </Container>
        )
    }
}