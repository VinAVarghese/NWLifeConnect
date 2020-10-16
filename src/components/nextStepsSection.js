import React from 'react';
import { Row, Col, Form, Checkbox, Input } from 'antd';

export default function ContactSection(props) {

    // Import From antd
    const { TextArea } = Input;

    return (
        <>
        <Row style={{ marginTop:"15px" }} justify="space-around" align="middle">
            <Col span={18} > 
                <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Name is required' }]}>
                    <Input name="name" id="nextStepsName" value={props.formEntry.name} onChange={props.handleInput} />
                </Form.Item>
                <Form.Item  >
                        <Checkbox style={{ marginTop:"5px"}} name={"nextStepRelationship"} checked={props.formEntry.nextStepRelationship} onChange={props.setUpdating}>
                        <strong>I'm coming home to relationship with God.</strong>
                        </Checkbox>
                        <ul style={{ marginTop:"10px", fontStyle: "italic" }}>
                            <li>For you are all children of God through faith In Christ Jesus. —Galatians 3.26</li>
                            <li>You are members of God's family. —Epheslans 2.19</li>
                        </ul>
                </Form.Item>
            </Col>
            <Col span={18}>
                <Form.Item >
                        <Checkbox name={"readyToServe"} checked={props.formEntry.readyToServe} onChange={props.setUpdating}>
                        <strong>I'm ready to jump in and serve at NWLife.</strong>
                        </Checkbox>
                </Form.Item>
            </Col>
            <Col span={18}>
                <Form.Item >
                        <Checkbox name={"nextStepOther"} checked={props.formEntry.nextStepOther} onChange={props.setUpdating}>
                        <strong>Other:</strong>
                        </Checkbox>
                </Form.Item>
                <Form.Item style={{marginTop:"-15px"}} >
                        <Form.Item name="otherContent">
                            <TextArea
                                name="otherContent"
                                value={props.formEntry.otherContent}
                                onChange={props.handleInput}
                                autoSize={{ minRows: 2, maxRows: 5 }}
                            />
                        </Form.Item>
                </Form.Item>
            </Col>
        </Row>
        </>
    )
}
