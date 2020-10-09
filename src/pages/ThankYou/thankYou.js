import React from 'react';
import { Row } from 'antd';
import Hero from "../../components/Hero/hero";

export default function ThankYou() {

    return (
        <>
            <Hero />
            <Row className="form" justify="center" align="middle">
                <a className="headers" href="https://nwlife.church">
                    <h1>Thank You!</h1>
                </a>
            </Row>
        </>
    )
}
