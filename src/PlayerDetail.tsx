import React, {Component} from 'react';
import './PlayerDetail.scss';
import players from './players.json';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/esm/FormGroup";
import {TopNavbar} from "./TopNavbar";

export class PlayerDetail extends Component {
    private readonly uniformNumber: number;

    constructor(props: any) {
        super(props);
        this.uniformNumber = parseInt(props.match.params.number);
    }

    render() {
        const player: any = players.find(p => p.uniformNumber === this.uniformNumber);

        return (
            <>
                <TopNavbar title={player.name} showBackNav={true}/>
                <div className="spacer"/>
                <div className="spacer"/>
                <Container className="container">
                    <FormGroup>
                        <Image roundedCircle src={player.imageUrl} alt={player.name}/>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <FormLabel>Graduation Year: </FormLabel>
                            <span>{player.year}</span>
                        </div>
                        <div>
                            <FormLabel>Position: </FormLabel>
                            <span>{player.position}</span>
                        </div>
                    </FormGroup>
                </Container>
                <div className="spacer"/>
            </>
        );
    }
}