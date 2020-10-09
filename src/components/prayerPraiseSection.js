import React from 'react';
import { Row, Col, Form, Checkbox, Input } from 'antd';

export default function ContactSection(props) {

    // Import From antd
    const { TextArea } = Input;

    return (
        <>
            <Row style={{ marginTop:"15px" }} className="nested" justify="center" align="middle">
                <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Name is required' }]}>
                    <Input name="name" id="pAndPName" value={props.formEntry.name} onChange={props.handleInput} />
                </Form.Item>
                <Col span={24}>
                    <Form.Item name="prayerPraise" label="Prayer Request / Praise Report">
                        <TextArea
                            name="prayerPraise"
                            value={props.formEntry.prayerPraise}
                            onChange={props.handleInput}
                            placeholder="Let us know somethings we can keep in prayer and/or praise God for with you..."
                            autoSize={{ minRows: 2, maxRows: 5 }}
                            />
                    </Form.Item>
                </Col>
                <Col span={18}>
                    <Form.Item  >
                            <Checkbox style={{ display: "flex", justifyContent: "center", alignItems: "center" }} name={"confidential"} checked={props.formEntry.confidential} onChange={props.setUpdating}>
                            Check box if confidential / for pastors only.
                            </Checkbox>
                    </Form.Item>
                </Col>
            </Row>


        {/* <Row className="nested" justify="space-around" align="middle">
            <Col span={18}>
                <h3 style={{ marginTop:"15px" }} className="text-center"> My next steps today... </h3>  
                <Form.Item  >
                        <Checkbox style={{ marginTop:"5px", display: "flex", justifyContent: "center", alignItems: "center" }} name={"nextStepFreshStart"} checked={props.formEntry.nextStepFreshStart} onChange={props.setUpdating}>
                        <strong>I'm coming home to relationship with God:</strong> it's time for a FRESH START.
                        </Checkbox>
                        <ul style={{ marginTop:"10px", fontStyle: "italic" }}>
                            <li>For you are all children of God through faith In Christ Jesus. —Galatians 3.26</li>
                            <li>You are members of God's family. —Epheslans 2.19</li>
                        </ul>
                </Form.Item>
            </Col>
            <Col span={18}>
                <Form.Item  >
                        <Checkbox style={{ display: "flex", justifyContent: "center", alignItems: "center" }} name={"nextStepLordsPrayer"} checked={props.formEntry.nextStepLordsPrayer} onChange={props.setUpdating}>
                        <strong>I'm praying the Lord's Prayer to re-orient my life from ME! ME! ME! to OUR, US, WE.</strong>
                        </Checkbox>
                        <ul style={{ marginTop:"10px", fontStyle: "italic" }}>
                            <li>In this manner therefore pray: Our Father who art in Heaven, hallowed be Thy name. —Matthew 6.9</li>
                        </ul>
                </Form.Item>
            </Col>
            <Col span={18}>
                <h3 className="text-center"> Sign Up </h3>
                <Form.Item >
                        <Checkbox style={{ display: "flex", justifyContent: "center", alignItems: "center" }} name={"serve"} checked={props.formEntry.serve} onChange={props.setUpdating}>
                        I'm ready to jump in and serve at NWLife.
                        </Checkbox>
                </Form.Item>
            </Col>
        </Row> */}
        </>
    )
}
