import React from 'react';
import { Row } from 'antd';
import Hero from "../../components/Hero/hero";

export default function ThankYou() {

    return (
        <>
            <Hero />
            <Row className="top-margin" justify="center" align="middle">
                <a className="headers" href="/">
                    <h1>Page Not Found</h1>
                </a>
            </Row>
        </>
    )
}
