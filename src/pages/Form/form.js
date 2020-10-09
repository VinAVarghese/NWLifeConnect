import React, {useState} from 'react';
import { Row, Form, message } from 'antd';
import { useHistory } from "react-router-dom";
import Hero from "../../components/Hero/hero";
import ContactSection from "../../components/contactSection";
import NextStepsSection from "../../components/nextStepsSection";
import PrayerPraiseSection from "../../components/prayerPraiseSection";
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
        nextStepFreshStart: false,
        nextStepLordsPrayer: false,
        readyToServe: false,
        prayerPraise: "",
        confidential: ""
    })

    // Sections State Control
    const [formSections, setFormSections] = useState({
        connect: "closed",
        nextSteps: "closed",
        pAndP: "closed",
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

    function toggleConnect() {
        setFormSections({ 
            connect: formSections.connect === "closed"? "open":"closed",
            nextSteps: "closed",
            pAndP: "closed"  
        });
    }
    function toggleNextSteps() {
        setFormSections({ 
            connect: "closed",
            nextSteps: formSections.nextSteps === "closed"? "open":"closed",
            pAndP: "closed"  
        });
    }
    function togglePAndP() {
        setFormSections({ 
            connect: "closed",
            nextSteps: "closed",
            pAndP: formSections.pAndP === "closed"? "open":"closed"
        });
    }
    
    // Submission Handling
    let history = useHistory();
    function handleSubmit(e) {
        //     API.signup(formEntry).then(data => {
            //         console.log("you are a new user", data)
                    history.push("/thankyou")
            //     }).catch(function (err) {
                //         message.error("Username already taken, please try a different username.", 2)
                //     });
        console.log("Submitted:", formEntry);
    }
    function checkName() {
        if (formEntry.name === ""){
            message.error("Please enter your name", 2);
        } 
    }

    return (
        <>
            <Hero />
            <Row className="top-margin" justify="center" align="middle">
                <Form name="nest-messages" onFinish={handleSubmit} >

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
            </Row>
        </>
    )
}
