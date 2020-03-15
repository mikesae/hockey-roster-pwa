import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Container from 'react-bootstrap/Container';
import './credits.scss';

export default class Credits extends Component {
    render() {
        return (
        <>
            <TopNavbar title="2019-20 Roster" showBackNav={false}/>
            <div className="spacer-for-header"/>
            <Container className="container">
                <FormGroup>
                    <div className="form-label">Web Design</div>
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
        </>
        );
    }
}