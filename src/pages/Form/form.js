import React, { useState } from 'react';
import API from "../../utils/API";
import { Row, Col, Form, message } from 'antd';
import { useHistory } from "react-router-dom";
import Hero from "../../components/Hero/hero";
import ContactSection from "../../components/contactSection";
import NextStepsSection from "../../components/nextStepsSection";
import PrayerPraiseSection from "../../components/prayerPraiseSection";
// import Slides from "../../components/slides";
import TileLinks from "../../components/tileLinks";
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
        invitedBy: "",
        attendance: "",
        nextStepRelationship: false,
        readyToServe: false,
        nextStepOther: false,
        otherContent: "",
        prayerPraise: "",
        confidential: false
    })

    // Sections State Control
    const [formSections, setFormSections] = useState({
        connect: "closed",
        nextSteps: "closed",
        pAndP: "closed",
        name: "closed"
    })

    // Input Handling & State Change
    function handleInput(event) {
        const { name, value } = event.target;
        setFormEntry({ ...formEntry, [name]: value });
    }

    function setUpdating(event) {
        const { name, checked } = event.target;
        if (checked) {
            setFormEntry({ ...formEntry, [name]: true });
        } else {
            setFormEntry({ ...formEntry, [name]: false });
        }
    }

    function setBirthday(date, dateString) {
        setFormEntry({ ...formEntry, birthday: dateString });
    }

    function toggleConnect() {
        setFormSections({
            connect: formSections.connect === "closed" ? "open" : "closed",
            nextSteps: "closed",
            pAndP: "closed",
            name: formSections.connect === "closed" ? "open" : "closed",
        });
    }
    function toggleNextSteps() {
        setFormSections({
            connect: "closed",
            nextSteps: formSections.nextSteps === "closed" ? "open" : "closed",
            pAndP: "closed",
            name: formSections.nextSteps === "closed" ? "open" : "closed"
        });
    }
    function togglePAndP() {
        setFormSections({
            connect: "closed",
            nextSteps: "closed",
            pAndP: formSections.pAndP === "closed" ? "open" : "closed",
            name: formSections.pAndP === "closed" ? "open" : "closed"
        });
    }

    // Submission Handling
    let history = useHistory();
    function handleSubmit(e) {
        API.postForm(formEntry).then(results => {
            // console.log("Results:",results);
            history.push("/thankyou")
        }).catch(function (err) {
            console.log(err);
            message.error("There was an error: Please try submitting again", 2)
        });
    }
    function checkName() {
        if (formEntry.name === "") {
            message.error("Please enter your name", 2);
        }
    }

    return (
        <>
            <Hero />
            <Row justify="space-around" className="responsive-alignment" >
                <Col sm={{ span: 24 }} md={{ span: 10 }} align="middle" style={{ marginTop: "30px" }}>
                    <Form className="form-width" name="nest-messages" onFinish={handleSubmit} >
                    {/* <div className={formSections.name}>
                        <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Name is required' }]}>
                            <Input name="name" value={formEntry.name} onChange={handleInput} />
                        </Form.Item>
                    </div> */}
                        <div className="headers" onClick={toggleConnect} >
                            <h1>Connect</h1>
                        </div>
                        <div className={formSections.connect}>
                            <ContactSection
                                formEntry={formEntry}
                                handleInput={handleInput}
                                setUpdating={setUpdating}
                                setBirthday={setBirthday}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                        <div className="headers" onClick={toggleNextSteps} >
                            <h1>Next Steps</h1>
                        </div>
                        <div className={formSections.nextSteps}>
                            <NextStepsSection
                                formEntry={formEntry}
                                handleInput={handleInput}
                                setUpdating={setUpdating}
                            />
                        </div>
                        <div className="headers" onClick={togglePAndP} >
                            <h1>Prayer & Praise</h1>
                        </div>
                        <div className={formSections.pAndP}>
                            <PrayerPraiseSection
                                formEntry={formEntry}
                                handleInput={handleInput}
                                setUpdating={setUpdating}
                            />
                        </div>

                        <Row justify="center" align="middle">
                            <Form.Item >
                                <button className="submit-btn" htmltype="submit" onClick={checkName}>
                                    Submit
                                </button>
                            </Form.Item>
                        </Row>

                    </Form>
                </Col>

                <Col sm={{ span: 24 }} md={{ span: 10 }} align="middle" style={{ marginTop: "25px" }}>
                    {/* <Slides /> */}
                    <TileLinks />
                </Col>
            </Row>
        </>
    )
}
