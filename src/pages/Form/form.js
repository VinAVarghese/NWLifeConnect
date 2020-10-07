import React, {useState} from 'react';
import { Row, Col, Form, Input, Button, Radio } from 'antd';

export default function ConnectForm() {

    //Form State Control
    const [formEntry, setFormEntry] = useState({
        name: "",
        address: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
        birthday: "",
        occupation: "",
        age: "",
        guest: "",
        attendance: "",
        nextStep: "",
        signUp: "",
        prayerPraise: "",
        confidential: ""
    })

    // Input Handling & State Change
    function handleInputForm(event) {
        const { name, value } = event.target;
        setFormEntry({ ...formEntry, [name]: value });
    }

    // Submission Handling
    function handleSubmitForm(e) {
        //     API.signup(formEntry).then(data => {
        //         console.log("you are a new user", data)
        //     }).catch(function (err) {
        //         message.error("Username already taken, please try a different username.", 2)
        //     });
    }

    return (
        <>
            <Row>
                <Col>
                <Form
                    {...formEntry}
                    layout={formEntry}
                    // form={form}
                    initialValues={{ layout: formEntry }}
                    onValuesChange={formEntry}
                >
                    <Form.Item label="Form Layout" name="layout">
                        <Radio.Group value={formEntry}>
                            <Radio.Button value="horizontal">Horizontal</Radio.Button>
                            <Radio.Button value="vertical">Vertical</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
                </Col>
            </Row>
        </>
    )
}
