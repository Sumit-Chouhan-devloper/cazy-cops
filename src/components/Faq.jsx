import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
const Faqs = () => {
    return (
        <>
            <section className="position-relative pt-5 faq_bg" id="faq">
                <Container className="mt-5 position-relative z-3">
                    <Row className="justify-content-center pb-sm-5 mb-sm-5">
                        <Col lg={10}>
                            <h4 className="faq_heading text-white mb-0">
                                FAQs
                            </h4>
                            <div className="faqs pt-lg-5 pt-4 mt-lg-2">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item
                                     eventKey="0"
                                        data-aos="zoom-in"
                                        data-aos-delay="100"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q1. What is Cozy Capys?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                     eventKey="1"
                                        data-aos="zoom-in"
                                        data-aos-delay="200"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q2. How does Cozy Capys give back to wildlife conservation?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                     eventKey="2"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q3. What kind of community events does Cozy Capys host?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className=" ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                     eventKey="3"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q4. How can I stay updated on Cozy Capys news and announcements?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className=" ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                     eventKey="4"
                                        data-aos="zoom-in"
                                        data-aos-delay="500"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q5. How can I adopt my Cozy Capy?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className=" ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                     eventKey="5"
                                        data-aos="zoom-in"
                                        data-aos-delay="600"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <Accordion.Header>
                                            Q6. What utility does owning a Cozy Capy provide?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p className="ff_Balsamiq_sans fs_sm fw-bold txt_black mb-1">
                                                SCal Mobile is a U.S. tech solutions company
                                                specializing in the recommerce of electronics. We
                                                offer a wide range of iPhones and services, all at
                                                competitive prices.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </section>
        </>
    );
};

export default Faqs;
