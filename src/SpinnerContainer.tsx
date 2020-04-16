import React, {Component} from 'react';
import {PulseLoader} from "react-spinners";
import {css} from "@emotion/core";
import {ISpinnerProps} from "./ISpinnerProps";
import Container from "react-bootstrap/Container";

const override = css`
  margin: 60% auto;
`;

export default class Spinner extends Component<ISpinnerProps> {
    render() {
        return (
            <div className={this.props.className}>
                <PulseLoader
                    css={override}
                    size={25}
                    color={"#00400e"}
                    loading={this.props.loading}
                />
                { !this.props.loading &&
                    <>{this.props.children}</>
                }
            </div>
        )
    }
}