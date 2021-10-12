import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Featureed from '../../../image/featured.png'

const FeatureedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
        <Container className="mb-5">
            <Row className="mb-5">
                <Col md={5} sm={12} className="mb-4 m-md-0">
                    <img className="img-fluid Featureed-img" src={Featureed} alt="" />
                </Col>
                <Col md={6} offset={1} sm={12} className="align-self-center ms-3 Featureed-content">
                        <h1>Execptional Dental Care, On Your Term.</h1>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempora vitae! Tenetur, itaque incidunt. Reiciendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempora vitae! Tenetur, itaque incidunt. Reiciendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempora vitae! Tenetur, itaque incidunt. Reiciendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, tempora vitae! Tenetur, itaque incidunt. Reiciendis.
                        </p>
                        <button className="btn-brand">
                            Learn More
                        </button>
                </Col>
            </Row>
        </Container>
        </section>
    );
};

export default FeatureedService;