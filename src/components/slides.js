import React from 'react';
import { Carousel } from 'antd';

export default function Slides() {

    const contentStyle = {
        height: '200px',
        color: '#fff',
        textShadow: "1px 2px 5px black",
        lineHeight: '200px',
        textAlign: 'center',
        margin:"0",
        backgroundColor:"#6d92ab"
    };

    return (
        <div>
            <Carousel  className="slides-border" autoplay >
                <div>
                    <a href="https://pushpay.com/g/nwlifechurch?src=hpp">
                        <h1 className="giving-img" style={contentStyle}>Giving</h1>
                    </a>
                </div>
                <div>
                    <a href="http://www.nwlifechurch.com/attend/">
                        <h1 className="reg-img"  style={contentStyle}>Register For Service</h1>
                    </a>
                </div>
                <div>
                    <a href="http://nwlife.church/resources/">
                        <h1 className="res-img"  style={contentStyle}>Online Resources</h1>
                    </a>
                </div>
            </Carousel>
        </div>
    )
}
