import React from 'react';
import MyResume from '../../assets/JafarJabborovResume.jpg';

const Resume = () => {
    return (
        <div className="container py-5 text-center">
            <h2 className="mb-4">My Resume</h2>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
                <img src={MyResume} alt="Resume" className="img-fluid rounded shadow" />
            </div>
            <a href="/JafarJabborovResume.pdf" download className="btn btn-primary mt-4">
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
