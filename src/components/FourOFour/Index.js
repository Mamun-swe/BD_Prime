import React from 'react'
import '../../App.scss'
import FourOFourImg from '../../assets/static/notfound.png'

const Index = () => {
    return (
        <div className="text-center fourOfour-box">
            <img src={FourOFourImg} className="img-fluid" alt="..." />
            <h6>No videos found</h6>
        </div>
    );
};

export default Index;