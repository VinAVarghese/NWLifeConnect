import React from 'react';
import { Row, Col, Form, Checkbox, Input, Radio } from 'antd';

export default function ContactSection(props) {

    // Import From antd
    const { TextArea } = Input;

    return (
        <>
            <Form.Item>
                <Checkbox style={{ marginTop: "15px", display: "flex", justifyContent: "center", alignItems: "center" }} name={"updating"} checked={props.formEntry.updating} onChange={props.setUpdating}>
                    Updating Contact Information?
                </Checkbox>
            </Form.Item>
            <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Name is required' }]}>
                <Input name="name" value={props.formEntry.name} onChange={props.handleInput} />
            </Form.Item>
            <Form.Item label="Address">
                <Input name="address" value={props.formEntry.address} onChange={props.handleInput} />
            </Form.Item>

            <Row justify="space-around" align="middle">
                <Col span={7}>
                    <Form.Item label="Apt #">
                        <Input name="apt" value={props.formEntry.apt} onChange={props.handleInput} />
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="City">
                        <Input name="city" value={props.formEntry.city} onChange={props.handleInput} />
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Zip">
                        <Input name="zip" value={props.formEntry.zip} onChange={props.handleInput} />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item name="email" label="Email" rules={[{ type: 'email', message: `Not valid email` }]}>
                <Input name="email" value={props.formEntry.email} onChange={props.handleInput} />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
                <Input name="phone" value={props.formEntry.phone} onChange={props.handleInput} />
            </Form.Item>

            <Row justify="space-around" align="middle">
                <Col span={11}>
                    <Form.Item name="birthday" label="Birthday">
                        <Input placeholder="MM/DD/YYYY" name="birthday" value={props.formEntry.birthday} onChange={props.handleInput} />
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Occupation">
                        <Input name="occupation" value={props.formEntry.occupation} onChange={props.handleInput} />
                    </Form.Item>
                </Col>
            </Row>

            <Row className="text-center" justify="space-around" align="middle">
                <Form.Item label="Age">
                    <Radio.Group name="age" onChange={props.handleInput} >
                        <Radio value={"under 12"}>under 12</Radio>
                        <Radio value={"12-19"}>12-19</Radio>
                        <Radio value={"20-29"}>20-29</Radio>
                        <Radio value={"30-39"}>30-39</Radio>
                        <Radio value={"40-49"}>40-49</Radio>
                        <Radio value={"50-59"}>50-59</Radio>
                        <Radio value={"60+"}>60+</Radio>
                    </Radio.Group>
                </Form.Item>
            </Row>

            <Row justify="center" align="middle">
                <Form.Item name="invitedBy" label="How did you hear about NWLife?">
                    <TextArea
                        name="invitedBy"
                        value={props.formEntry.invitedBy}
                        onChange={props.handleInput}
                        placeholder="Name of person who invited you, website, church sign, invitation card..."
                        autoSize={{ minRows: 2, maxRows: 5 }}
                    />
                </Form.Item>
            </Row>

            <Row className="text-center" justify="space-around" align="middle">
                <Form.Item label="Check One">
                    <Radio.Group name="attendance" onChange={props.handleInput} >
                        <Radio value={"1st time guest"}>1st time guest</Radio>
                        <Radio value={"2nd time guest"}>2nd time guest</Radio>
                        <Radio value={"Regular attender"}>Regular attender</Radio>
                    </Radio.Group>
                </Form.Item>
            </Row>

        </>
    )
}
