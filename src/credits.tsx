import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Container from 'react-bootstrap/Container';
import './credits.scss';
import BottomNavbar from './BottomNavbar';

export default class Credits extends Component {
    render() {
        return (
        <>
            <TopNavbar title="Credits" showBackNav={true}/>
            <Container className="container">
                <FormGroup>
                    <div className="form-label">App Design</div>
                    <div>Mike Saelens</div>
                </FormGroup>
                <FormGroup>
                    <div className="form-label">Player Photos</div>
                    <div>Dave Hicks, Mike Saelens</div>
                </FormGroup>
                <FormGroup>
                    <div className="form-label">Thumbnail Photos</div>
                    <div>Allan Barger <a className="btn-link" href="https://extremeteam.photoreflect.com/">Extreme Team Sports Photos</a></div>
                </FormGroup>
                <FormGroup>
                    <div className="form-label">Deployment and Hosting</div>
                    <div><a className="btn-link" href="https://www.netlify.com">Netlify</a></div>
                </FormGroup>
            </Container>
            <BottomNavbar/>
        </>
        );
    }
}