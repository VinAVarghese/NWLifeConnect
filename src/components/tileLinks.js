import React from 'react'
import { Row, Col } from 'antd';

export default function TileLinks() {

    // const contentStyle = {
    //     position: 'relative',
    //     top:'65px',
    //     height: '30vh',
    //     color: '#fff',
    //     textShadow: "1px 2px 5px black",
    //     textAlign: 'center',
    //     margin:"0"
    // };

    return (
        <>
            <Row gutter={5} justify="space-around" align="middle" className="tile-top">
                <a href="https://pushpay.com/g/nwlifechurch?src=hpp">
                    <Col className="giving-img slides-border tile-size">
                            <h1>Give</h1>
                    </Col>
                </a>
                <a href="http://www.nwlifechurch.com/attend/">
                    <Col className="reg-img slides-border tile-size">
                            <h1>Attend</h1>
                    </Col>
                </a>
            </Row>
            <Row gutter={5} justify="space-around" align="middle">
                <a href="https://www.target.com/gift-registry/giftgiver?registryId=e60318b7191f44738b46ed9af7432b8a&lnk=registry_custom_url">
                    <Col className="toy-img slides-border tile-size">
                            <h1>Toy Drive</h1>
                    </Col>
                </a>
                <a href="http://www.nwlifechurch.com/christmas/">
                    <Row justify="space-around" align="middle">
                        <Col className="christmas-img slides-border">
                                <h1>Christmas Service</h1>
                        </Col>
                    </Row>
                </a>
            </Row>
            
        </>
    )
}
