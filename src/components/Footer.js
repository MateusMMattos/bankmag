import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';


import logo from '../assets/MAGbank.png';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';

import './Footer.scss';

const Footer = () => (
    <footer>
        <Container> 
            <Row className='text-center py-5'>
                <Col xs={12} lg={6} className='text-lg-left py-xs-5'>
                    <Image src={logo}/>
                </Col>
                <Col xs={12} lg={4} className="py-xs-5">
                    <Image src={applestore}/>
                    <Image src={googleplay} className='mx-3'/>
                </Col>
                <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' color='#7c7c7c'/>
                    <FontAwesomeIcon icon={faTwitter} size='2x' color='#7c7c7c' className='mx-3'/>
                    <FontAwesomeIcon icon={faYoutube} size='2x' color='#7c7c7c'/>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;