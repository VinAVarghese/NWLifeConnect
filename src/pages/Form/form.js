import React, {useState} from 'react';
import { Row, Col, Form, Checkbox, Input, Button, DatePicker, Radio } from 'antd';
import Hero from "../../components/hero";
import "./form.css"

export default function ConnectForm() {

    //Form State Control
    const [formEntry, setFormEntry] = useState({
        updating: false,
        name: "",
        address: "",
        apt: "",
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
    function handleInput(event) {
        const { name, value } = event.target;
        setFormEntry({ ...formEntry, [name]: value });
    }
    function setUpdating(event) {
        const { name , checked } = event.target;
        if(checked){
            setFormEntry({ ...formEntry, [name]: true });
        } else {
            setFormEntry({ ...formEntry, [name]: false });   
        }
    }
    function setBirthday(date, dateString) {
            setFormEntry({ ...formEntry, birthday: dateString });
    }
    
    // Submission Handling
    function handleSubmit(e) {
        //     API.signup(formEntry).then(data => {
            //         console.log("you are a new user", data)
            //     }).catch(function (err) {
                //         message.error("Username already taken, please try a different username.", 2)
                //     });
        console.log(formEntry);
    }
    
    // Import From antd
    const { TextArea } = Input;
    
    console.log(formEntry);
    return (
        <>
            <Hero />
            <Row justify="center" align="middle">
                <Form name="nest-messages" onFinish={handleSubmit} >

                    <Form.Item  >
                        <Checkbox style={{display:"flex", justifyContent:"center", alignItems: "center"}} name={"updating"} checked={formEntry.updating} onChange={setUpdating}>
                            Updating Contact Information?
                        </Checkbox>
                    </Form.Item>
                    <Form.Item  name="name" label="Name" rules={[{ required: true, message: 'Name is required' }]}>
                        <Input name="name" value={formEntry.name} onChange={handleInput} />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input name="address" value={formEntry.address} onChange={handleInput} />
                    </Form.Item>
                    
                    <Row className="nested" justify="space-around" align="middle">
                        <Col span={7}>
                            <Form.Item label="Apt #">
                                <Input name="apt" value={formEntry.apt} onChange={handleInput} />
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item label="City">
                                <Input name="city" value={formEntry.city} onChange={handleInput} />
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item label="Zip">
                                <Input name="zip" value={formEntry.zip} onChange={handleInput} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item name="email" label="Email" rules={[{ type: 'email', message: `Not valid email` }]}>
                        <Input name="email" value={formEntry.email} onChange={handleInput} />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone">
                        <Input name="phone" value={formEntry.phone} onChange={handleInput} />
                    </Form.Item>

                    <Row className="nested" justify="space-around" align="middle">
                        <Col span={11}>
                            <Form.Item name="birthday" label="Birthday">
                                <DatePicker format="DD/MM/YYYY" name="birthday" value={formEntry.birthday} onChange={setBirthday}/>
                            </Form.Item>
                        </Col>
                        <Col span={11}>
                            <Form.Item label="Occupation">
                                <Input name="occupation" value={formEntry.occupation} onChange={handleInput} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row className="nested text-center" justify="space-around" align="middle">
                            <Form.Item label="Age">
                                <Radio.Group name="age" onChange={handleInput} >
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

                    <Row className="nested" justify="space-around" align="middle">
                        <Form.Item name="guest" label="How did you hear about NWLife?">
                            <TextArea
                                value={formEntry.guest}
                                onChange={handleInput}
                                placeholder="Name of person who invited you, website, church sign, invitation card..."
                                autoSize={{ minRows: 2, maxRows: 5 }}
                            />
                        </Form.Item>
                    </Row>

                    <Row className="nested text-center" justify="space-around" align="middle">
                            <Form.Item label="Check One">
                                <Radio.Group name="attendance" onChange={handleInput} >
                                    <Radio value={"1st time guest"}>1st time guest</Radio>
                                    <Radio value={"2nd time guest"}>2nd time guest</Radio>
                                    <Radio value={"Regular attender"}>Regular attender</Radio>
                                </Radio.Group>
                            </Form.Item>
                    </Row>

                    <Row className="nested" justify="space-around" align="middle">
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Row>

                </Form> 
            </Row>
        </>
    )
}
