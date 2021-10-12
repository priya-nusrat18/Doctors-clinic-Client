import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Doctor from '../Doctors/Doctor';
import FeatureedService from '../FeatureedService/FeatureedService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureedService></FeatureedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctor></Doctor>
            <Footer></Footer>
        </div>
    );
};

export default Home;