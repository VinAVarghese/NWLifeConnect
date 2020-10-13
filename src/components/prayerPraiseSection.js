import React from 'react';
import { Row, Col, Form, Checkbox, Input } from 'antd';

export default function ContactSection(props) {

    // Import From antd
    const { TextArea } = Input;

    return (
        <>
            <Row style={{ marginTop:"15px" }} justify="space-around" align="middle">
                <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Name is required' }]}>
                    <Input name="name" id="pAndPName" value={props.formEntry.name} onChange={props.handleInput} />
                </Form.Item>
                <Col span={18}>
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
        </>
    )
}
