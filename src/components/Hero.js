import React from 'react';
import { Button, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import './Hero.scss';

const Hero = ({onClick}) => (
    <Card className='text-center text-light hero'>
        <Row className='my-lg-5 d-flex gap-5 rmv-margin'>
            <Col lg className="text-lg-end my-5">
                <Image className='d-lg-none text-center' src={logo}/>
                <Image className='d-none d-lg-inline-block hero__logo' src={logoDesktop}/>
            </Col>
            <Col lg className="text-lg-start my-5">
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
            </Col>
        </Row>
    </Card>
);

export default Hero;