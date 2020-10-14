import React from 'react';
import { Row, Col } from 'antd';
import Hero from "../../components/Hero/hero";
import Slides from "../../components/slides";

export default function ThankYou() {

    return (
        <>
            <Hero />
            <Row className="responsive-alignment" justify="space-around">
                <Col className="thank-you" sm={{span:24}} md={{span:10}} >
                    <a href="https://nwlife.church"><div className="headers">
                        <h1>Thank You!</h1>
                    </div></a>
                </Col>
                <Col sm={{span:24}} md={{span:10}} style={{marginTop:"25px"}}>
                    <Slides />
                </Col>
            </Row>
        </>
    )
}
