import React from 'react';
import './About.css';
import m1 from '../components/images/m.jpg';
import m2 from '../components/images/m2.jpg';
import m3 from '../components/images/m3.jpg';

const About = () => {
    return (
        <div className="about-container">
            <h1 style={{ color: 'white' }}>About Us</h1>
            <p className="company-description">
                Welcome to our place for construction professionals. At our company, we don’t just plan; we build according to a great plan. With our great teamwork and exceptional skills, we make your every dream real. We give life to any blueprint!
            </p>
            <div className="mission-vision-container">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to transform dreams into reality through meticulous planning, innovative solutions, and unmatched construction expertise. We aim to be the trusted partner for all construction needs, delivering projects that enhance communities and improve lives.
                    </p>
                </div>
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>
                        Our vision is to be the leading construction company in the region, known for our innovation, professionalism, and exceptional service. We strive to exceed expectations on every project, big or small, and to create strong, lasting relationships with our clients and partners.
                    </p>
                </div>
            </div>
            <div className="team">
                <h2 style={{ color: 'black' }}>Our Team</h2>
                <div className="team-images">
                    <div className="team-member">
                        <img src={m1} alt="Team Member 1" className="team-image" />
                        <div className="member-info">
                            <h3 style={{ color: 'white' }}>Title</h3>
                            <p style={{ color: 'white' }}>Name</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={m2} alt="Team Member 2" className="team-image" />
                        <div className="member-info">
                            <h3 style={{ color: 'white' }}>Title</h3>
                            <p style={{ color: 'white' }}>Name</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={m3} alt="Team Member 3" className="team-image" />
                        <div className="member-info">
                            <h3 style={{ color: 'white' }}>Title</h3>
                            <p style={{ color: 'black' }}>Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
